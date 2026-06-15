import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

export function ExperienceLedger() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-[#4b00b5] px-5 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="SELECTED EXPERIENCES / 02"
          borderClassName="border-white/55"
          eyebrowClassName="text-[#ffd84d]"
          action={
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-fit items-center gap-3 border border-[#ffd84d] px-5 py-3 text-sm font-black text-[#ffd84d] transition-colors hover:bg-[#ffd84d] hover:text-[#4b00b5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd84d]"
            >
              LinkedIn
              <ArrowUpRight size={17} />
            </a>
          }
        />

        <Reveal className="mt-16">
          <div>
            {experiences.map((experience, index) => (
              <article
                key={`${experience.organization}-${experience.role}`}
                className="grid gap-7 border-b border-white/30 py-12 md:grid-cols-[64px_0.58fr_1fr] md:py-14"
              >
                <p className="font-mono text-sm font-black text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-black md:text-3xl">
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${experience.organization} website`}
                      className="transition-colors hover:text-[#ffd84d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd84d]"
                    >
                      {experience.organization}
                    </a>
                  </h3>
                  <p className="mt-3 text-base font-semibold text-white/76">
                    {experience.role}
                  </p>
                </div>
                <div>
                  <p className="max-w-3xl text-lg font-semibold leading-8 text-white/90 md:text-xl md:leading-9">
                    {experience.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs font-bold text-white/60">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
