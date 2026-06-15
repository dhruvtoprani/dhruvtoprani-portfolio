import { ClipLine, StaggerWords } from "@/components/KineticText";
import { Reveal } from "@/components/Reveal";

export function OperatingRange() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[#eef0ea] px-5 py-24 text-[#080908] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="grid gap-8 border-b-2 border-black pb-12 lg:grid-cols-[0.42fr_1fr] lg:items-end">
          <p className="font-mono text-sm font-black">ABOUT / 01</p>
          <h2 className="font-display text-6xl font-black leading-[0.9] md:text-9xl">
            <ClipLine>
              About Me<span className="text-black/35">.</span>
            </ClipLine>
          </h2>
        </Reveal>

        <Reveal className="border-b-2 border-black py-16 md:py-24">
          <p className="inline-flex bg-[#ce1126] px-3 py-2 font-mono text-xs font-black text-white">
            GUIDING PRINCIPLE
          </p>
          <blockquote className="mt-9 max-w-[1500px] text-[clamp(1.75rem,6.5vw,6.5rem)] font-black leading-[0.96] md:mt-12">
            <ClipLine className="whitespace-nowrap">
              Your ceiling is only
            </ClipLine>
            <ClipLine className="whitespace-nowrap text-black/38" delay={0.12}>
              as high as your ambition.
            </ClipLine>
          </blockquote>
        </Reveal>

        <Reveal className="grid border-b-2 border-black lg:grid-cols-3">
          <div>
            <div className="py-12 lg:min-h-80 lg:border-r lg:border-black/30 lg:pr-10">
              <p className="font-mono text-xs font-bold text-black/50">
                01 / IMPACT
              </p>
              <h3 className="mt-12 text-4xl font-black md:text-5xl">
                <StaggerWords text="Sustainability" />
              </h3>
              <p className="mt-5 max-w-md text-2xl font-bold leading-9 text-black/58">
                Cleaner energy. Resilient infrastructure.
              </p>
            </div>
          </div>
          <div className="border-t border-black/30 lg:border-t-0">
            <div className="py-12 lg:min-h-80 lg:border-r lg:border-black/30 lg:px-10">
              <p className="font-mono text-xs font-bold text-black/50">
                02 / IMPACT
              </p>
              <h3 className="mt-12 text-4xl font-black md:text-5xl">
                <StaggerWords text="Community" />
              </h3>
              <p className="mt-5 max-w-md text-2xl font-bold leading-9 text-black/58">
                Better access. Better public outcomes.
              </p>
            </div>
          </div>
          <div className="border-t border-black/30 lg:border-t-0">
            <div className="py-12 lg:min-h-80 lg:pl-10">
              <p className="font-mono text-xs font-bold text-black/50">
                03 / IMPACT
              </p>
              <h3 className="mt-12 text-4xl font-black md:text-5xl">
                <StaggerWords text="Craft" />
              </h3>
              <p className="mt-5 max-w-md text-2xl font-bold leading-9 text-black/58">
                Move fast. Sweat the details.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
