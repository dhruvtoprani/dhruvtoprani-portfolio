import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  action?: ReactNode;
  borderClassName: string;
  eyebrow: string;
  eyebrowClassName?: string;
};

export function SectionHeader({
  action,
  borderClassName,
  eyebrow,
  eyebrowClassName = ""
}: SectionHeaderProps) {
  return (
    <Reveal
      className={`flex flex-col gap-8 border-b-2 pb-8 sm:flex-row sm:items-center sm:justify-between ${borderClassName}`}
    >
      <p className={`font-mono text-base font-black ${eyebrowClassName}`}>
        {eyebrow}
      </p>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
