"use client";

import { ArrowDown, ArrowUpRight, CircleDot, Quote } from "lucide-react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useRef } from "react";

import { ClipLine, StaggerWords } from "@/components/KineticText";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";
import { managerReferences } from "@/data/references";

type SpotlightStyle = CSSProperties & {
  "--hero-x": string;
  "--hero-y": string;
};

const heroReference = managerReferences.find(
  (reference) => reference.id === "tom-kocik-exceeded-expectations"
);
const heroCtaClass =
  "inline-flex min-h-12 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-md px-4 py-3 text-sm font-bold text-[#08080b] transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:px-3 xl:px-4";

function emphasizeReference(text: string, phrases: string[]) {
  const matches = phrases
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
      <strong key={`${start}-${phrase}`} className="font-black text-white">
        {text.slice(start, end)}
      </strong>
    );
    cursor = end;
  });

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts.length > 0 ? parts : text;
}

export function SystemsHero() {
  const sectionRef = useRef<HTMLElement>(null);

  function trackPointer(event: PointerEvent<HTMLElement>) {
    if (window.matchMedia("(hover: none)").matches) return;
    const section = sectionRef.current;
    if (!section) return;

    const bounds = section.getBoundingClientRect();
    section.style.setProperty("--hero-x", `${event.clientX - bounds.left}px`);
    section.style.setProperty("--hero-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={trackPointer}
      className="hero-spotlight relative min-h-dvh overflow-hidden bg-[#08080b] px-5 pb-14 pt-28 text-white md:px-8 md:pb-16 md:pt-28"
      style={
        {
          "--hero-x": "68%",
          "--hero-y": "30%"
        } as SpotlightStyle
      }
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-11rem)] max-w-[1440px] flex-col">
        <Reveal className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] font-bold uppercase text-white/42 md:text-xs">
          <span className="inline-flex items-center gap-2 text-[#d8ff55]">
            <CircleDot className="h-3 w-3" />
            Open to full-time positions May 2027
          </span>
          <span aria-hidden="true">/</span>
          <span className="text-[#59f6ff]">Product · Program · Operations</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#ff3ca6]">Open to relocation</span>
        </Reveal>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-14">
          <h1 className="font-display max-w-[1320px] whitespace-nowrap text-[clamp(2.2rem,11.5vw,3.4rem)] font-black leading-[0.82] text-white md:text-[clamp(3.4rem,11vw,9.5rem)]">
            <ClipLine delay={0.02}>
              Dhruv <span className="text-[#ff3ca6]">Toprani</span>
            </ClipLine>
          </h1>

          <Reveal delay={0.08} className="mt-9 max-w-5xl md:mt-12">
            <p className="text-[clamp(1.55rem,3.4vw,3.5rem)] font-semibold leading-[1.06] text-white/42">
              <StaggerWords text="I combine" />{" "}
              <StaggerWords
                className="font-black text-white"
                delay={0.07}
                text="technical fluency,"
              />{" "}
              <StaggerWords
                className="font-black text-white"
                delay={0.14}
                text="judgment,"
              />{" "}
              <StaggerWords delay={0.19} text="and" />{" "}
              <StaggerWords
                className="font-black text-white"
                delay={0.23}
                text="clear communication"
              />{" "}
              <StaggerWords delay={0.3} text="to" />{" "}
              <StaggerWords
                className="font-black text-white"
                delay={0.33}
                text="align teams"
              />{" "}
              <StaggerWords delay={0.39} text="and build" />{" "}
              <StaggerWords
                className="font-black text-white"
                delay={0.45}
                text="products users value."
              />
            </p>
          </Reveal>

          <Reveal
            delay={0.12}
            className="mt-7 flex flex-wrap gap-3 md:mt-8 md:flex-nowrap"
          >
            <a
              href="#projects"
              className={`${heroCtaClass} bg-[#d8ff55] hover:bg-white`}
            >
              Explore selected work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className={`${heroCtaClass} bg-[#59f6ff] hover:bg-white`}
            >
              Recent experience
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#references"
              className={`${heroCtaClass} bg-[#ff3ca6] hover:bg-white`}
            >
              View References
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${heroCtaClass} bg-white hover:bg-[#0a66c2] hover:text-white`}
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal
            delay={0.14}
            className="mt-7 grid gap-x-8 gap-y-6 border-t border-white/12 pt-6 md:mt-8 md:grid-cols-[minmax(0,1fr)_minmax(19rem,28rem)] md:gap-x-12"
          >
            {heroReference ? (
              <figure className="border-t border-white/12 pt-5 md:col-start-2 md:row-start-1 md:self-start md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <Quote
                  className="h-5 w-5 text-[#ff3ca6]"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 text-base font-medium leading-7 text-white/72 md:text-lg md:leading-8">
                  {emphasizeReference(
                    heroReference.quote,
                    heroReference.emphasis
                  )}
                </blockquote>
                <figcaption className="mt-4 flex flex-wrap items-end justify-between gap-4">
                  <span className="text-sm leading-6 text-white/48">
                    <strong className="block font-bold text-white/82">
                      {heroReference.name}
                    </strong>
                    {heroReference.role} · {heroReference.organization}
                  </span>
                  <a
                    href="#references"
                    className="inline-flex min-h-11 items-center gap-2 font-mono text-xs font-black uppercase text-[#ff3ca6] transition hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3ca6]"
                  >
                    View more references
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </figcaption>
              </figure>
            ) : null}

            <div className="max-w-3xl md:col-start-1 md:row-start-1 md:flex md:h-full md:flex-col md:pr-8">
              <p className="text-[clamp(1.5rem,2.35vw,2.35rem)] font-semibold leading-[1.08] text-white/56">
                <strong className="font-black text-white">
                  Honors Computer Engineering
                </strong>
                <strong className="mt-2 block font-bold text-white/58">
                  Michigan State University
                </strong>
                <span className="mt-3 block font-mono text-xs font-bold uppercase text-white/42">
                  Graduating May 2027
                </span>
              </p>

              <dl className="mt-7 grid gap-5 border-t border-white/12 pt-5 sm:grid-cols-2 md:mt-auto">
                <div>
                  <dt className="font-mono text-[10px] font-bold uppercase text-white/42">
                    Minor
                  </dt>
                  <dd className="mt-2 text-lg font-extrabold leading-tight text-white/88">
                    Entrepreneurship
                  </dd>
                </div>
                <div className="sm:border-l sm:border-white/12 sm:pl-5">
                  <dt className="font-mono text-[10px] font-bold uppercase text-white/42">
                    Concentration
                  </dt>
                  <dd className="mt-2 text-lg font-extrabold leading-tight text-white/88">
                    Robotics &amp; Automation
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
