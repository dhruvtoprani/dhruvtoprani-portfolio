"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { featuredProjects } from "@/data/featuredProjects";
import { profile } from "@/data/profile";

const topProjects = featuredProjects.slice(0, 5);

export function ProjectDossiers() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  function toggleProject(name: string) {
    setOpenProject((current) => (current === name ? null : name));
  }

  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-[#d8ff55] text-[#080908]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="SELECTED PROJECTS / 03"
          borderClassName="border-black"
          action={
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-fit items-center gap-3 bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-[#db0066] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              All projects on GitHub
              <ArrowUpRight size={17} />
            </a>
          }
        />

        <div className="border-b-2 border-black">
          {topProjects.map((project, index) => {
            const isOpen = openProject === project.name;
            const panelId = `project-panel-${index}`;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.28, delay: index * 0.025 }}
                className="border-t border-black/35"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleProject(project.name)}
                  className="grid w-full cursor-pointer grid-cols-[1fr_auto] gap-x-4 gap-y-3 py-7 text-left transition-colors hover:text-[#686d65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:min-h-36 md:grid-cols-[64px_0.7fr_1fr_auto] md:items-center md:gap-6 md:py-8"
                >
                  <span className="col-start-1 row-start-1 font-mono text-xs opacity-45 md:col-start-1 md:row-start-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-2 col-start-1 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
                    <span className="block text-3xl font-black md:text-4xl">
                      {project.name}
                    </span>
                    <span className="mt-2 block font-mono text-[10px] font-bold opacity-55">
                      {project.category.toUpperCase()}
                    </span>
                  </span>
                  <span className="col-span-2 col-start-1 row-start-3 max-w-2xl text-base font-semibold leading-7 opacity-70 md:col-span-1 md:col-start-3 md:row-start-1 md:text-xl md:leading-8">
                    {project.hook}
                  </span>
                  <span className="col-start-2 row-start-1 inline-flex min-h-8 items-center justify-self-end gap-2 font-mono text-xs font-bold md:col-start-4 md:row-start-1 md:min-h-11">
                    {isOpen ? "CLOSE" : "VIEW MORE"}
                    {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className={
                          project.image
                            ? "grid gap-8 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12"
                            : "max-w-4xl py-10"
                        }
                      >
                        <div>
                          <p className="max-w-2xl text-xl font-semibold leading-9 md:text-2xl md:leading-10">
                            {project.description}
                          </p>

                          {project.metric && project.metricLabel ? (
                            <div className="mt-8 border-l-4 border-[#ff3ca6] pl-4">
                              <p className="font-mono text-[10px] font-bold">
                                {project.metricLabel.toUpperCase()}
                              </p>
                              <p className="mt-1 text-4xl font-black">
                                {project.metric}
                              </p>
                            </div>
                          ) : null}

                          <div className="mt-8 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className="border border-black/30 px-3 py-1.5 font-mono text-[10px] font-bold uppercase text-black/65"
                              >
                                {item}
                              </span>
                            ))}
                          </div>

                          <div className="mt-8 flex flex-wrap gap-3">
                            {project.demo ? (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 bg-black px-4 py-3 text-sm font-bold text-white transition hover:text-[#d8ff55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                              >
                                Live project
                                <ArrowUpRight size={16} />
                              </a>
                            ) : null}
                            {project.github ? (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 border border-black px-4 py-3 text-sm font-bold text-black transition hover:text-[#686d65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                              >
                                Source
                                <ArrowUpRight size={16} />
                              </a>
                            ) : null}
                          </div>
                        </div>

                        {project.image ? (
                          <div className="relative aspect-video overflow-hidden border-2 border-black bg-black">
                            <Image
                              src={project.image}
                              alt={
                                project.imageAlt ??
                                `${project.name} project interface`
                              }
                              fill
                              sizes="(max-width: 1024px) 100vw, 62vw"
                              className="object-cover object-left-top"
                            />
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
