"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Shuffle } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { managerReferences, type ManagerReference } from "@/data/references";

const visibleReferenceCount = 3;
const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const featuredReferenceIds = [
  "courtney-reese-trusted-contributor",
  "bianca-rodriguez-complex-systems",
  "tom-kocik-problem-solver"
];
const featuredReferences = featuredReferenceIds
  .map((id) => managerReferences.find((reference) => reference.id === id))
  .filter((reference): reference is ManagerReference => Boolean(reference));
const referenceGroups = Array.from(
  new Set(managerReferences.map((reference) => reference.name))
).map((name) => ({
  name,
  references: managerReferences.filter((reference) => reference.name === name)
}));
const orderedReferences = Array.from(
  { length: Math.max(...referenceGroups.map((group) => group.references.length)) },
  (_, index) => referenceGroups.flatMap((group) => group.references[index] ?? [])
).flat();

function sampleReferences(pool: ManagerReference[], count: number) {
  const candidates = [...pool];
  const sampledReferences: ManagerReference[] = [];

  while (sampledReferences.length < count && candidates.length > 0) {
    const totalWeight = candidates.reduce(
      (total, reference) => total + (reference.selectionWeight ?? 1),
      0
    );
    let threshold = Math.random() * totalWeight;
    let selectedIndex = candidates.length - 1;

    for (let index = 0; index < candidates.length; index += 1) {
      threshold -= candidates[index].selectionWeight ?? 1;
      if (threshold <= 0) {
        selectedIndex = index;
        break;
      }
    }

    const [selectedReference] = candidates.splice(selectedIndex, 1);
    sampledReferences.push(selectedReference);

    for (let index = candidates.length - 1; index >= 0; index -= 1) {
      if (candidates[index].name === selectedReference.name) {
        candidates.splice(index, 1);
      }
    }
  }

  return sampledReferences;
}

function renderEmphasizedText(text: string, emphasis: string[]) {
  const matches = emphasis
    .map((phrase) => {
      const start = text.indexOf(phrase);
      return { end: start + phrase.length, phrase, start };
    })
    .filter(({ start }) => start >= 0)
    .sort((first, second) => first.start - second.start);
  const parts: ReactNode[] = [];
  let cursor = 0;

  matches.forEach(({ end, phrase, start }) => {
    if (start < cursor) {
      return;
    }

    if (start > cursor) {
      parts.push(text.slice(cursor, start));
    }

    parts.push(
      <strong key={`${start}-${phrase}`} className="font-black">
        {text.slice(start, end)}
      </strong>
    );
    cursor = end;
  });

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return parts.length > 0 ? parts : text;
}

function createRevealOrder(text: string) {
  return text
    .split("")
    .map((character, index) => ({ character, index }))
    .filter(({ character }) => /[a-z0-9]/i.test(character))
    .sort(() => Math.random() - 0.5)
    .map(({ index }) => index);
}

function scrambleToward(text: string, progress: number, revealOrder: number[]) {
  const revealCount = Math.floor(revealOrder.length * progress);
  const revealedIndexes = new Set(revealOrder.slice(0, revealCount));

  return text
    .split("")
    .map((character, index) => {
      if (revealedIndexes.has(index) || !/[a-z0-9]/i.test(character)) {
        return character;
      }

      return scrambleCharacters[
        Math.floor(Math.random() * scrambleCharacters.length)
      ];
    })
    .join("");
}

function ScrambleText({
  animateKey,
  emphasis = [],
  text
}: {
  animateKey: string;
  emphasis?: string[];
  text: string;
}) {
  const reduceMotion = useReducedMotion();
  const previousAnimateKey = useRef(animateKey);
  const [displayText, setDisplayText] = useState(text);
  const [isSettled, setIsSettled] = useState(true);

  useEffect(() => {
    const shouldAnimate = previousAnimateKey.current !== animateKey;
    previousAnimateKey.current = animateKey;

    if (reduceMotion || !shouldAnimate) {
      setDisplayText(text);
      setIsSettled(true);
      return;
    }

    let frame = 0;
    const revealOrder = createRevealOrder(text);
    const totalFrames = 34;
    setIsSettled(false);
    const interval = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;

      setDisplayText(
        progress >= 1
          ? text
          : scrambleToward(text, Math.pow(progress, 0.68), revealOrder)
      );

      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setIsSettled(true);
      }
    }, 34);

    return () => window.clearInterval(interval);
  }, [animateKey, reduceMotion, text]);

  return (
    <>
      {isSettled && displayText === text
        ? renderEmphasizedText(text, emphasis)
        : displayText}
    </>
  );
}

export function ManagerReferences() {
  const reduceMotion = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [railEdges, setRailEdges] = useState({ start: true, end: false });
  const [visibleReferences, setVisibleReferences] = useState(() =>
    featuredReferences.length === visibleReferenceCount
      ? featuredReferences
      : managerReferences.slice(0, visibleReferenceCount)
  );
  const visibleIds = new Set(visibleReferences.map((reference) => reference.id));
  const galleryReferences = orderedReferences.filter(
    (reference) => !visibleIds.has(reference.id) &&
      (selectedAuthor === "all" || reference.name === selectedAuthor)
  );

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateEdges = () => setRailEdges({
      start: rail.scrollLeft <= 2,
      end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2
    });
    rail.scrollTo({ left: 0, behavior: "instant" });
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(rail);
    rail.addEventListener("scroll", updateEdges, { passive: true });
    return () => {
      observer.disconnect();
      rail.removeEventListener("scroll", updateEdges);
    };
  }, [selectedAuthor, visibleReferences]);

  function moveRail(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * (rail.clientWidth + 16),
      behavior: reduceMotion ? "instant" : "smooth"
    });
  }

  function shuffleReferences() {
    setVisibleReferences((currentReferences) => {
      const currentIds = new Set(
        currentReferences.map((reference) => reference.id)
      );
      const unusedReferences = managerReferences.filter(
        (reference) => !currentIds.has(reference.id)
      );

      if (unusedReferences.length < visibleReferenceCount) {
        return currentReferences;
      }

      return sampleReferences(unusedReferences, visibleReferenceCount);
    });
  }

  return (
    <section
      id="references"
      className="scroll-mt-16 bg-[#f7f6f1] px-5 py-24 text-[#080908] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="REFERENCES / 03"
          borderClassName="border-black"
          eyebrowClassName="text-[#db0066]"
          action={
            <button
              type="button"
              onClick={shuffleReferences}
              className="inline-flex min-h-12 items-center gap-3 border border-[#db0066] px-5 py-3 font-mono text-xs font-black uppercase text-[#db0066] transition hover:bg-[#db0066] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#db0066]"
            >
              Shuffle
              <Shuffle size={16} />
            </button>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3" data-reference-highlights>
          {visibleReferences.map((reference, index) => {
            const personKey = `${reference.name}-${reference.role}-${reference.organization}`;

            return (
              <Reveal
                key={`reference-slot-${index}`}
                delay={index * 0.04}
                className="flex min-h-80 flex-col border border-black/18 bg-white/45 p-6 md:p-8"
              >
                <Quote className="h-6 w-6 text-[#db0066]" />
                <blockquote className="mt-8 text-xl font-medium leading-8 text-[#080908] md:text-2xl md:leading-9">
                  <ScrambleText
                    animateKey={reference.id}
                    emphasis={reference.emphasis}
                    text={reference.quote}
                  />
                </blockquote>
                <div className="mt-auto pt-10">
                  <p className="font-mono text-[10px] font-black uppercase text-black/42">
                    <ScrambleText
                      animateKey={personKey}
                      text={reference.relationship}
                    />
                  </p>
                  <p className="mt-3 text-lg font-black text-[#080908]">
                    <ScrambleText animateKey={personKey} text={reference.name} />
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-black/58">
                    <ScrambleText
                      animateKey={personKey}
                      text={`${reference.role} · ${reference.organization}`}
                    />
                  </p>
                  {reference.letterHref ? (
                    <a
                      href={reference.letterHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center border border-black/24 px-4 py-3 font-mono text-xs font-black uppercase text-[#080908] transition hover:border-[#db0066] hover:bg-[#db0066] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#db0066]"
                    >
                      View full letter
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="mt-6 inline-flex min-h-11 items-center border border-black/24 px-4 py-3 font-mono text-xs font-black uppercase text-[#080908] transition hover:border-[#db0066] hover:bg-[#db0066] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#db0066]"
                    >
                      View full letter
                    </button>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 border-t border-black/20 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h3 className="text-xl font-black">More perspectives</h3>
            <div className="flex flex-wrap items-center gap-3">
              <select
                aria-label="Filter quotes by author"
                value={selectedAuthor}
                onChange={(event) => setSelectedAuthor(event.target.value)}
                className="min-h-11 max-w-full border border-black/24 bg-transparent px-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db0066]"
              >
                <option value="all">All references</option>
                {referenceGroups.map(({ name }) => <option key={name} value={name}>{name}</option>)}
              </select>
              <button
                type="button"
                aria-label="Previous quotes"
                aria-controls="reference-library"
                title="Previous quotes"
                disabled={railEdges.start}
                onClick={() => moveRail(-1)}
                className="grid h-11 w-11 place-items-center border border-black/24 transition hover:bg-[#db0066] hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db0066]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next quotes"
                aria-controls="reference-library"
                title="Next quotes"
                disabled={railEdges.end}
                onClick={() => moveRail(1)}
                className="grid h-11 w-11 place-items-center border border-black/24 transition hover:bg-[#db0066] hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db0066]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div
            ref={railRef}
            id="reference-library"
            role="region"
            aria-label="More reference quotes"
            tabIndex={0}
            className="reference-rail mt-6 flex gap-4 overflow-x-auto pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#db0066]"
          >
            {galleryReferences.map((reference) => (
              <figure key={reference.id} className="reference-rail-card flex min-h-96 shrink-0 flex-col border border-black/18 bg-white/45 p-6">
                <Quote aria-hidden="true" className="h-5 w-5 shrink-0 text-[#db0066]" />
                <blockquote className="mt-5 text-lg font-medium leading-8 text-[#080908]">
                  {renderEmphasizedText(reference.quote, reference.emphasis)}
                </blockquote>
                <figcaption className="mt-auto pt-8">
                  <p className="text-base font-black">{reference.name}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-black/60">{reference.role} · {reference.organization}</p>
                  {reference.letterHref ? (
                    <a href={reference.letterHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 border border-black/24 px-3 py-2 font-mono text-[10px] font-black uppercase transition hover:bg-[#db0066] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db0066]">
                      View full letter <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
