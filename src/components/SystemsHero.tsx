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
  "group inline-flex min-h-14 items-center justify-between gap-2 border border-white/12 bg-white/[0.045] px-3 py-3 text-xs font-bold text-white transition duration-200 hover:border-[#d8ff55] hover:bg-[#d8ff55] hover:text-[#08080b] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:gap-3 md:px-5 md:text-sm";

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
      className="hero-spotlight relative min-h-[calc(100dvh-2rem)] overflow-hidden bg-[#08080b] px-5 pb-10 pt-24 text-white md:px-8 md:pb-8 md:pt-28"
      style={
        {
          "--hero-x": "68%",
          "--hero-y": "30%"
        } as SpotlightStyle
      }
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-11rem)] max-w-[1440px] flex-col justify-center py-7 md:py-9">
        <div className="grid items-end gap-9 md:gap-12 lg:grid-cols-[minmax(0,1.75fr)_minmax(20rem,0.75fr)] lg:gap-10 xl:gap-16">
          <div className="min-w-0">
            <Reveal delay={0.02}>
              <p className="mb-7 font-mono text-[0.72rem] font-bold uppercase text-white/68 md:mb-9 md:text-xs">
                {profile.availability}
              </p>
            </Reveal>

            <h1 className="font-display max-w-[980px] text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.78] text-white">
              <ClipLine delay={0.02}>
                Dhruv
              </ClipLine>
              <ClipLine delay={0.08}>
                <span className="text-[#ff3ca6]">Toprani</span>
              </ClipLine>
            </h1>
          </div>

          <Reveal
            delay={0.12}
            className="border-l-2 border-[#ff3ca6] pl-5 lg:mb-2 lg:pl-7"
          >
            {heroReference ? (
              <figure>
                <Quote
                  className="mb-5 h-7 w-7 text-[#ff3ca6]"
                  aria-hidden="true"
                />
                <blockquote className="text-base font-medium leading-7 text-white/72 md:text-xl md:leading-9">
                  <strong className="font-black text-white">
                    Dhruv consistently exceeded expectations
                  </strong>
                  , demonstrating a rare and highly valuable combination of{" "}
                  <strong className="font-black text-white">
                    technical acumen and exceptional interpersonal skills.
                  </strong>
                </blockquote>
                <figcaption className="mt-6 font-mono text-[0.68rem] font-bold uppercase leading-5 text-white/44 md:text-xs">
                  {heroReference.name} · {heroReference.organization}
                </figcaption>
              </figure>
            ) : null}
          </Reveal>
        </div>

        <Reveal
          delay={0.18}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/12 bg-white/12 lg:mt-14 lg:grid-cols-4"
        >
          <a href="#projects" className={heroCtaClass}>
            Explore selected work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="#experience" className={heroCtaClass}>
            Recent experience
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="#references" className={heroCtaClass}>
            View references
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`${heroCtaClass} hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white`}
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
