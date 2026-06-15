type NeonSkillBandProps = {
  background: string;
  foreground: string;
  items: readonly string[];
  reverse?: boolean;
};

export function NeonSkillBand({
  background,
  foreground,
  items,
  reverse = false
}: NeonSkillBandProps) {
  const label = `Core skills: ${items.join(", ")}`;

  return (
    <div
      className="overflow-hidden border-y border-black/20 py-4"
      style={{ backgroundColor: background, color: foreground }}
    >
      <p className="sr-only">{label}</p>
      <div
        aria-hidden="true"
        className="skills-marquee-track flex w-max"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <div key={`${copy}-${item}`} className="flex shrink-0 items-center">
                <span className="px-5 font-mono text-xs font-black uppercase md:px-8 md:text-sm">
                  {item}
                </span>
                <span
                  className="h-1.5 w-1.5 shrink-0"
                  style={{ backgroundColor: foreground }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
