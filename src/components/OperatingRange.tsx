import { ClipLine, StaggerWords } from "@/components/KineticText";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function OperatingRange() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[#005f8f] px-5 pb-24 pt-12 text-white md:px-8 md:pb-32 md:pt-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="ABOUT ME / 05"
          borderClassName="border-white"
          eyebrowClassName="text-white"
        />

        <Reveal className="border-b-2 border-white py-16 md:py-24">
          <p className="inline-flex bg-[#ce1126] px-3 py-2 font-mono text-xs font-black text-white">
            GUIDING PRINCIPLE
          </p>
          <blockquote className="mt-9 max-w-[1500px] text-[clamp(1.75rem,6.5vw,6.5rem)] font-black leading-[0.96] md:mt-12">
            <ClipLine className="whitespace-nowrap">
              Your ceiling is only
            </ClipLine>
            <ClipLine className="whitespace-nowrap text-white/42" delay={0.12}>
              as high as your ambition.
            </ClipLine>
          </blockquote>
        </Reveal>

        <Reveal className="grid border-b-2 border-white lg:grid-cols-3">
          <div>
            <div className="py-12 lg:min-h-80 lg:border-r lg:border-white/30 lg:pr-10">
              <p className="font-mono text-xs font-bold text-white/55">
                01 / VALUE
              </p>
              <h3 className="mt-12 text-4xl font-black md:text-5xl">
                <StaggerWords text="First Principles" />
              </h3>
              <p className="mt-5 max-w-md text-2xl font-bold leading-9 text-white/68">
                Strip problems to fundamentals. Build the answer back up.
              </p>
            </div>
          </div>
          <div className="border-t border-white/30 lg:border-t-0">
            <div className="py-12 lg:min-h-80 lg:border-r lg:border-white/30 lg:px-10">
              <p className="font-mono text-xs font-bold text-white/55">
                02 / VALUE
              </p>
              <h3 className="mt-12 text-4xl font-black md:text-5xl">
                <StaggerWords text="Hard Things" />
              </h3>
              <p className="mt-5 max-w-md text-2xl font-bold leading-9 text-white/68">
                Choose difficult, consequential work. Stay with it.
              </p>
            </div>
          </div>
          <div className="border-t border-white/30 lg:border-t-0">
            <div className="py-12 lg:min-h-80 lg:pl-10">
              <p className="font-mono text-xs font-bold text-white/55">
                03 / VALUE
              </p>
              <h3 className="mt-12 text-4xl font-black md:text-5xl">
                <StaggerWords text="Craft" />
              </h3>
              <p className="mt-5 max-w-md text-2xl font-bold leading-9 text-white/68">
                Move fast. Sweat the details.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
