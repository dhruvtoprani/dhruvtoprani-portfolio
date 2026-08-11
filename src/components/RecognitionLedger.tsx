import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { awards, involvement } from "@/data/recognition";

export function RecognitionLedger() {
  return (
    <section
      id="awards"
      className="scroll-mt-16 bg-[#00513f] px-5 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeader
          eyebrow="AWARDS & INVOLVEMENT / 04"
          borderClassName="border-white"
          eyebrowClassName="text-white/62"
        />

        <div className="mt-16 grid lg:grid-cols-2">
          <Reveal className="py-12 lg:pr-12">
            <h2 className="text-4xl font-black md:text-6xl">Awards</h2>
            <ol className="mt-10 border-t border-white/22">
              {awards.map((award, index) => (
                <li
                  key={award.title}
                  className="grid gap-3 border-b border-white/22 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:items-baseline"
                >
                  <span className="font-mono text-xs font-black text-white/38">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-extrabold leading-7 md:text-xl">
                    {award.title}
                  </span>
                  {award.detail ? (
                    <span className="font-mono text-xs font-black uppercase text-white/58 sm:text-right">
                      {award.detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="border-t border-white py-12 lg:border-l lg:border-t-0 lg:pl-12">
            <h2 className="text-4xl font-black md:text-6xl">Involvement</h2>
            <ol className="mt-10 border-t border-white/22">
              {involvement.map((item, index) => (
                <li
                  key={`${item.organization}-${item.role}`}
                  className="grid gap-3 border-b border-white/22 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)_minmax(9rem,0.45fr)] sm:items-baseline"
                >
                  <span className="font-mono text-xs font-black text-white/38">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-extrabold leading-7 md:text-xl">
                    {item.organization}
                  </span>
                  <span className="font-mono text-xs font-black uppercase leading-5 text-white/58 sm:text-right">
                    {item.role}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
