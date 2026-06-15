import { ExperienceLedger } from "@/components/ExperienceLedger";
import { ManifestoContact } from "@/components/ManifestoContact";
import { NeonSkillBand } from "@/components/NeonSkillBand";
import { OperatingRange } from "@/components/OperatingRange";
import { ProjectDossiers } from "@/components/ProjectDossiers";
import { SystemsHero } from "@/components/SystemsHero";
import { skillBands } from "@/data/skills";

export default function Home() {
  return (
    <main>
      <SystemsHero />
      <NeonSkillBand
        background="#db0066"
        foreground="#ffffff"
        items={skillBands.product}
      />
      <OperatingRange />
      <NeonSkillBand
        background="#d8ff55"
        foreground="#080908"
        items={skillBands.impact}
        reverse
      />
      <ExperienceLedger />
      <NeonSkillBand
        background="#db0066"
        foreground="#ffffff"
        items={skillBands.technical}
      />
      <ProjectDossiers />
      <NeonSkillBand
        background="#59f6ff"
        foreground="#080908"
        items={skillBands.research}
        reverse
      />
      <ManifestoContact />
    </main>
  );
}
