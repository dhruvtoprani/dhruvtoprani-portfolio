"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, List, Quote, Shuffle, X } from "lucide-react";
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
  const [isBrowsing, setIsBrowsing] = useState(false);
  const [visibleReferences, setVisibleReferences] = useState(() =>
    featuredReferences.length === visibleReferenceCount
      ? featuredReferences
      : managerReferences.slice(0, visibleReferenceCount)
  );

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
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsBrowsing((current) => !current)}
                aria-expanded={isBrowsing}
                aria-controls="reference-library"
                className="inline-flex min-h-12 items-center gap-3 border border-[#db0066] px-5 py-3 font-mono text-xs font-black uppercase text-[#db0066] transition hover:bg-[#db0066] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#db0066]"
              >
                {isBrowsing ? "Back to highlights" : "Browse all"}
                {isBrowsing ? <X size={16} /> : <List size={16} />}
              </button>
              {!isBrowsing ? (
                <button
                  type="button"
                  onClick={shuffleReferences}
                  className="inline-flex min-h-12 items-center gap-3 border border-[#db0066] px-5 py-3 font-mono text-xs font-black uppercase text-[#db0066] transition hover:bg-[#db0066] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#db0066]"
                >
                  Shuffle
                  <Shuffle size={16} />
                </button>
              ) : null}
            </div>
          }
        />

        <div
          hidden={isBrowsing}
          className={isBrowsing ? "hidden" : "mt-14 grid gap-5 lg:grid-cols-3"}
        >
          {visibleReferences.map((reference, index) => {
            const personKey = `${reference.name}-${reference.role}-${reference.organization}`;

            return (
              <Reveal
                key={`reference-slot-${index}`}
                delay={index * 0.04}
                className="flex min-h-80 flex-col border border-black/18 bg-white/45 p-6 md:p-8"
              >
                <Quote className="h-6 w-6 text-[#db0066]" />
                <blockquote className="mt-8 text-2xl font-medium leading-9 text-[#080908] md:text-3xl md:leading-10">
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
        <div id="reference-library" hidden={!isBrowsing}>
          {isBrowsing ? referenceGroups.map(({ name, references }) => {
            const author = references[0];

            return (
              <div key={name} className="mt-14 border-t border-black/20 pt-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black md:text-3xl">{name}</h3>
                    <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-black/60">
                      {author.role} · {author.organization}
                    </p>
                    <p className="mt-2 font-mono text-[10px] font-bold uppercase text-black/50">
                      {author.relationship}
                    </p>
                  </div>
                  {author.letterHref ? (
                    <a
                      href={author.letterHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 border border-black/24 px-4 py-3 font-mono text-xs font-black uppercase text-[#080908] transition hover:border-[#db0066] hover:bg-[#db0066] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#db0066]"
                    >
                      View full letter
                      <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>
                <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {references.map((reference) => (
                    <figure key={reference.id} className="border border-black/18 bg-white/45 p-6">
                      <Quote aria-hidden="true" className="h-5 w-5 text-[#db0066]" />
                      <blockquote className="mt-5 text-lg font-medium leading-8 text-[#080908]">
                        {renderEmphasizedText(reference.quote, reference.emphasis)}
                      </blockquote>
                    </figure>
                  ))}
                </div>
              </div>
            );
          }) : null}
        </div>
      </div>
    </section>
  );
}
