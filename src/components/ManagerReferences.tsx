"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Quote } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { managerReferences, type ManagerReference } from "@/data/references";

const referenceGroups = Array.from(
  new Set(managerReferences.map((reference) => reference.name))
).map((name) => managerReferences.filter((reference) => reference.name === name));
const orderedReferences = Array.from(
  { length: Math.max(...referenceGroups.map((group) => group.length)) },
  (_, index) => referenceGroups.flatMap((group) => group[index] ?? [])
).flat();
const controlClass = "grid h-11 w-11 place-items-center border border-black/24 transition hover:bg-[#db0066] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db0066]";

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
    if (start < cursor) return;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <strong key={`${start}-${phrase}`} className="font-black">
        {text.slice(start, end)}
      </strong>
    );
    cursor = end;
  });

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts.length > 0 ? parts : text;
}

function ReferenceCard({ reference, duplicate = false }: {
  reference: ManagerReference;
  duplicate?: boolean;
}) {
  return (
    <figure
      aria-hidden={duplicate ? true : undefined}
      data-reference-copy={duplicate ? "duplicate" : "original"}
      className="reference-rail-card flex min-h-96 shrink-0 flex-col border border-black/18 bg-white/45 p-6"
    >
      <Quote aria-hidden="true" className="h-5 w-5 shrink-0 text-[#db0066]" />
      <blockquote className="mt-5 text-lg font-medium leading-8 text-[#080908]">
        {renderEmphasizedText(reference.quote, reference.emphasis)}
      </blockquote>
      <figcaption className="mt-auto pt-8">
        <p className="text-base font-black">{reference.name}</p>
        <p className="mt-1 text-xs font-semibold leading-5 text-black/60">
          {reference.role} · {reference.organization}
        </p>
        {reference.letterHref ? (
          <a
            href={reference.letterHref}
            target="_blank"
            rel="noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            className="mt-4 inline-flex min-h-11 items-center gap-2 border border-black/24 px-3 py-2 font-mono text-[10px] font-black uppercase transition hover:bg-[#db0066] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db0066]"
          >
            View full letter <ArrowUpRight size={14} />
          </a>
        ) : null}
      </figcaption>
    </figure>
  );
}

function getCycleWidth(rail: HTMLDivElement) {
  const original = rail.querySelector<HTMLElement>("[data-reference-copy=original]");
  const duplicate = rail.querySelector<HTMLElement>("[data-reference-copy=duplicate]");
  return original && duplicate ? duplicate.offsetLeft - original.offsetLeft : 0;
}

export function ManagerReferences() {
  const reduceMotion = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const interaction = useRef({ hovered: false, focused: false, resumeAt: 0 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || reduceMotion || isPaused) return;

    let frame = 0;
    let previousTime = 0;
    let position = rail.scrollLeft;
    let isVisible = false;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(rail);

    const syncManualScroll = () => {
      if (Math.abs(rail.scrollLeft - position) > 2) position = rail.scrollLeft;
    };
    rail.addEventListener("scroll", syncManualScroll, { passive: true });

    const advance = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      const { hovered, focused, resumeAt } = interaction.current;

      if (isVisible && !document.hidden && !hovered && !focused && time >= resumeAt) {
        const cycleWidth = getCycleWidth(rail);
        position += elapsed * 12 / 1000;
        if (cycleWidth > 0 && position >= cycleWidth) position -= cycleWidth;
        rail.scrollLeft = position;
      } else {
        position = rail.scrollLeft;
      }
      frame = requestAnimationFrame(advance);
    };
    frame = requestAnimationFrame(advance);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("scroll", syncManualScroll);
    };
  }, [reduceMotion, isPaused]);

  function pauseForInteraction() {
    interaction.current.resumeAt = performance.now() + 8000;
  }

  function moveRail(direction: number) {
    const rail = railRef.current;
    if (!rail) return;
    pauseForInteraction();
    const distance = rail.clientWidth + 16;
    const cycleWidth = getCycleWidth(rail);
    if (direction < 0 && rail.scrollLeft < distance) rail.scrollLeft += cycleWidth;
    if (direction > 0 && rail.scrollLeft >= cycleWidth) rail.scrollLeft -= cycleWidth;
    rail.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "instant" : "smooth"
    });
  }

  return (
    <section
      id="references"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") interaction.current.hovered = true;
      }}
      onPointerLeave={() => { interaction.current.hovered = false; }}
      onFocusCapture={() => { interaction.current.focused = true; }}
      onBlurCapture={(event) => {
        interaction.current.focused = event.currentTarget.contains(event.relatedTarget);
      }}
      onPointerDownCapture={pauseForInteraction}
      onWheelCapture={pauseForInteraction}
      onKeyDownCapture={pauseForInteraction}
      className="scroll-mt-16 bg-[#f7f6f1] px-5 py-24 text-[#080908] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="REFERENCES / 03"
          borderClassName="border-black"
          eyebrowClassName="text-[#db0066]"
          action={
            <div className="flex gap-3">
              <button
                type="button"
                aria-label={isPaused ? "Resume automatic movement" : "Pause automatic movement"}
                title={isPaused ? "Resume automatic movement" : "Pause automatic movement"}
                aria-pressed={isPaused}
                onClick={(event) => {
                  setIsPaused((current) => !current);
                  if (isPaused) {
                    interaction.current.resumeAt = 0;
                    event.currentTarget.blur();
                  }
                }}
                className={controlClass}
              >
                {isPaused ? <Play size={18} /> : <Pause size={18} />}
              </button>
              <button type="button" aria-label="Previous quotes" title="Previous quotes" aria-controls="reference-library" onClick={() => moveRail(-1)} className={controlClass}>
                <ArrowLeft size={18} />
              </button>
              <button type="button" aria-label="Next quotes" title="Next quotes" aria-controls="reference-library" onClick={() => moveRail(1)} className={controlClass}>
                <ArrowRight size={18} />
              </button>
            </div>
          }
        />
        <div
          ref={railRef}
          id="reference-library"
          role="region"
          aria-label="Reference quotes"
          tabIndex={0}
          className="reference-rail mt-10 flex gap-4 overflow-x-auto pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#db0066]"
        >
          {orderedReferences.map((reference) => <ReferenceCard key={reference.id} reference={reference} />)}
          {orderedReferences.map((reference) => <ReferenceCard key={`duplicate-${reference.id}`} reference={reference} duplicate />)}
        </div>
      </div>
    </section>
  );
}
