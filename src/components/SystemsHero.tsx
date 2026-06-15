"use client";

import { ArrowDown, ArrowUpRight, CircleDot } from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";

import { ClipLine, StaggerWords } from "@/components/KineticText";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

type SpotlightStyle = CSSProperties & {
  "--hero-x": string;
  "--hero-y": string;
};

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
      className="hero-spotlight relative min-h-dvh overflow-hidden bg-[#08080b] px-5 pb-14 pt-28 text-white md:px-8 md:pb-20 md:pt-36"
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
            Open to Fall 2026 co-ops
          </span>
          <span aria-hidden="true">/</span>
          <span>Product · Program · Operations</span>
          <span aria-hidden="true">/</span>
          <span>East Lansing, MI</span>
        </Reveal>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <h1 className="font-display max-w-[1320px] whitespace-nowrap text-[clamp(2.2rem,11.5vw,3.4rem)] font-black leading-[0.82] text-white md:text-[clamp(3.4rem,11vw,9.5rem)]">
            <ClipLine delay={0.02}>
              Dhruv <span className="text-[#ff3ca6]">Toprani</span>
            </ClipLine>
          </h1>

          <Reveal delay={0.08} className="mt-9 max-w-5xl md:mt-12">
            <p className="text-[clamp(1.55rem,3.4vw,3.5rem)] font-semibold leading-[1.06] text-white">
              <StaggerWords text="I turn complex technical work into" />{" "}
              <StaggerWords
                className="text-white/38"
                delay={0.18}
                text="clear priorities, measurable progress, and products that matter."
              />
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="mt-9 flex flex-col gap-6 border-t border-white/12 pt-6 md:mt-12 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="max-w-2xl text-base leading-7 text-white/54 md:text-lg">
                Honors Computer Engineering at Michigan State University, with
                a minor in Entrepreneurship and a concentration in Robotics &
                Automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#d8ff55] px-5 py-3 text-sm font-bold text-[#08080b] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ff55]"
                >
                  Explore selected work
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-md border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </Reveal>
        </div>

      </div>
    </section>
  );
}
