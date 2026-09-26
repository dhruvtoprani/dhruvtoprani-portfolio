"use client";

import { ArrowDown, ArrowUpRight, Quote } from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";

import { ClipLine } from "@/components/KineticText";
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
      className="hero-spotlight relative min-h-[calc(100dvh-2rem)] overflow-hidden bg-[#08080b] px-5 pb-14 pt-28 text-white md:px-8 md:pb-8 md:pt-28"
      style={
        {
          "--hero-x": "68%",
          "--hero-y": "30%"
        } as SpotlightStyle
      }
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-11rem)] max-w-[1440px] flex-col justify-center py-12 md:py-9">
          <h1 className="font-display max-w-[1320px] whitespace-nowrap text-[clamp(2.2rem,11.5vw,3.4rem)] font-black leading-[0.82] text-white md:text-[clamp(3.4rem,11vw,9.5rem)]">
            <ClipLine delay={0.02}>
              Dhruv <span className="text-[#ff3ca6]">Toprani</span>
            </ClipLine>
          </h1>

          <Reveal
            delay={0.08}
            className="mt-10 flex flex-wrap gap-3"
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
              className={`${heroCtaClass} bg-[#d8ff55] hover:bg-white`}
            >
              Recent experience
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#references"
              className={`${heroCtaClass} bg-[#d8ff55] hover:bg-white`}
            >
              View References
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${heroCtaClass} bg-[#d8ff55] hover:bg-[#0a66c2] hover:text-white`}
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12} className="mt-8 border-t border-white/12 pt-6">
            {heroReference ? (
              <figure className="flex max-w-5xl items-start gap-4">
                <Quote
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ff3ca6]"
                  aria-hidden="true"
                />
                <blockquote className="text-base font-medium leading-7 text-white/72 md:text-lg md:leading-8">
                  <strong className="font-black text-white">
                    Dhruv consistently exceeded expectations.
                  </strong>{" "}
                  <span className="text-white/48">
                    {heroReference.name} · {heroReference.organization}
                  </span>
                </blockquote>
              </figure>
            ) : null}
          </Reveal>
      </div>
    </section>
  );
}
