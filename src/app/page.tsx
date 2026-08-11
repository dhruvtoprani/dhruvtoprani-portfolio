import { ExperienceLedger } from "@/components/ExperienceLedger";
import { ManagerReferences } from "@/components/ManagerReferences";
import { ManifestoContact } from "@/components/ManifestoContact";
import { NeonSkillBand } from "@/components/NeonSkillBand";
import { OperatingRange } from "@/components/OperatingRange";
import { ProjectDossiers } from "@/components/ProjectDossiers";
import { RecognitionLedger } from "@/components/RecognitionLedger";
import { SystemsHero } from "@/components/SystemsHero";
import { recognitionMarquee } from "@/data/recognition";
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
      <ManagerReferences />
      <NeonSkillBand
        background="#ce1126"
        foreground="#f7f6f1"
        items={skillBands.references}
      />
      <RecognitionLedger />
      <NeonSkillBand
        background="#f5f5f1"
        foreground="#00513f"
        items={recognitionMarquee}
        reverse
      />
      <OperatingRange />
      <NeonSkillBand
        background="#d8ff55"
        foreground="#080908"
        items={skillBands.craft}
        reverse
      />
      <ManifestoContact />
    </main>
  );
}
