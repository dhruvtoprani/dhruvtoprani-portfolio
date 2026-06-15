import { ArrowUpRight, Mail } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export function ManifestoContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[#b9004d] px-5 pb-8 pt-24 text-white md:px-8 md:pb-10 md:pt-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="CONTACT / 04"
          borderClassName="border-white"
          eyebrowClassName="text-[#d8ff55]"
        />

        <Reveal className="mt-16 grid gap-12 lg:grid-cols-[0.42fr_1fr]">
          <p className="max-w-md text-2xl font-bold leading-9 text-white/72">
            Product, program, operations, research, and technical work with
            measurable impact.
          </p>
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="flex min-h-24 items-center justify-between border-b border-white/35 text-2xl font-black text-white transition-colors duration-200 hover:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Email
              <Mail size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-24 items-center justify-between border-b border-white/35 text-2xl font-black text-white transition-colors duration-200 hover:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              LinkedIn
              <ArrowUpRight size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-24 items-center justify-between border-b border-white/35 text-2xl font-black text-white transition-colors duration-200 hover:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              GitHub
              <ArrowUpRight size={20} />
            </a>
          </div>
        </Reveal>
        <footer className="mt-14 flex flex-col gap-3 border-t border-white/14 pt-5 font-mono text-xs text-white/34 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} DHRUV TOPRANI</span>
          <span>PRODUCT · PROGRAM · OPERATIONS</span>
        </footer>
      </div>
    </section>
  );
}
