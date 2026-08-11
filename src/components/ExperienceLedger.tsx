"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

const experiencePanelTransition = {
  height: { bounce: 0, duration: 0.36, type: "spring" },
  opacity: { duration: 0.18 }
} as const;

export function ExperienceLedger() {
  const [openExperience, setOpenExperience] = useState<string | null>(null);

  function toggleExperience(key: string) {
    setOpenExperience((current) => (current === key ? null : key));
  }

  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-[#4b00b5] px-5 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="SELECTED EXPERIENCES / 01"
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
            {experiences.map((experience, index) => {
              const experienceKey = `${experience.organization}-${experience.role}`;
              const isOpen = openExperience === experienceKey;
              const panelId = `experience-panel-${index}`;

              return (
                <motion.article
                  key={experienceKey}
                  layout
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
                    <motion.button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleExperience(experienceKey)}
                      whileTap={{ scale: 0.98 }}
                      transition={{ bounce: 0, duration: 0.2, type: "spring" }}
                      className="mt-7 inline-flex min-h-11 cursor-pointer items-center gap-2 border border-white/35 px-4 py-3 font-mono text-xs font-black text-[#ffd84d] transition-colors hover:border-[#ffd84d] hover:bg-[#ffd84d] hover:text-[#4b00b5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd84d]"
                    >
                      {isOpen ? "CLOSE" : "VIEW MORE"}
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={experiencePanelTransition}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{
                              bounce: 0,
                              duration: 0.3,
                              type: "spring"
                            }}
                            className="mt-7 max-w-3xl border-l-2 border-[#ffd84d] pl-5"
                          >
                            <p className="font-mono text-[10px] font-black uppercase text-[#ffd84d]">
                              Contribution
                            </p>
                            <p className="mt-3 text-base font-semibold leading-7 text-white/78">
                              {experience.contribution}
                            </p>
                            {experience.details ? (
                              <ul className="mt-5 list-disc space-y-3 pl-5 text-base font-semibold leading-7 text-white/72 marker:text-[#ffd84d]">
                                {experience.details.map((detail) => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            ) : null}
                          </motion.div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
