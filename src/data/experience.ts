export type Experience = {
  organization: string;
  role: string;
  dates?: string;
  summary: string;
  contribution: string;
  details?: string[];
  website: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    organization: "Gaia Predictive",
    role: "Growth Intern",
    dates: "Jun 2026 - Present",
    summary:
      "Turn discovery across five verticals into paid pilots and sharper market priorities, contributing to 3+ signed letters of intent.",
    contribution:
      "Customer discovery, growth strategy, pilot ownership, positioning, and success metrics.",
    details: [
      "Led 30+ interviews across five verticals to prioritize market requirements and pilot strategy, contributing to 3+ signed letters of intent.",
      "Owned 5+ paid pilots end to end, from lead sourcing and discovery through scope definition, onboarding, and milestone tracking.",
      "Drove exit from an underperforming vertical after customer analysis showed 2x longer sales cycles and lower expected ROI, reallocating capacity toward higher-value markets."
    ],
    website: "https://gaiapredictive.com",
    tags: ["Growth", "Customer Discovery", "Pilots"]
  },
  {
    organization: "Whisker",
    role: "Technical Program Management Intern",
    dates: "May 2026 - Aug 2026",
    summary:
      "Led delivery across 40+ features and 12+ team members, accelerated new-product workflows, and briefed 75+ stakeholders on progress and tradeoffs.",
    contribution:
      "Program execution, release coordination, workflow automation, and engineering operations.",
    details: [
      "Managed 40+ features in a program increment, performing risk and capacity analysis to drive milestone and resource decisions.",
      "Led cross-functional Agile delivery for 12+ members over 6+ sprints, running PI Planning, ART Syncs, and daily standups using Jira.",
      "Automated product-feature reprioritization impact assessments and replanning with a multi-agent AI system, saving 6+ hours each week.",
      "Cut new-product introduction (NPI) cycle time from 3+ hours to less than five minutes by automating manual processes for go-to-market and supply-chain teams.",
      "Owned PI Readout reporting end to end, briefing 75+ technical and non-technical stakeholders on progress, risks, and tradeoffs."
    ],
    website: "https://www.whisker.com/about-us",
    tags: ["Robotics", "TPM", "Agile Delivery"]
  },
  {
    organization: "MSU Research Foundation",
    role: "Product Management Intern",
    dates: "Sep 2025 - Present",
    summary:
      "Turn user research into measurable growth: 35% lower onboarding drop-off, approximately 20% more paid subscribers, and unified lifecycle visibility across five teams.",
    contribution:
      "User research, UAT, CRM product ownership, analytics, and founder enablement.",
    details: [
      "Built a unified CRM pipeline across 7+ applications, centralizing lifecycle metrics and improving full-funnel visibility across five teams.",
      "Reduced LMS onboarding drop-off 35% through 50+ user interviews, funnel analysis, UAT, and shipped UX improvements.",
      "Developed a technical documentation-compression MCP adopted by 10+ startups, reducing AI token spend by up to 40%.",
      "Increased paid subscribers approximately 20% by analyzing customer data, identifying friction, and wireframing a lower-friction pricing page."
    ],
    website: "https://msufoundation.org",
    tags: ["Product", "CRM", "User Research"]
  },
  {
    organization: "Dewpoint",
    role: "Product Management Intern",
    dates: "Jun 2025 - Aug 2025",
    summary:
      "Defined a $1.2M product opportunity and shipped an operations portal and KPI dashboards used by 20+ network operators.",
    contribution:
      "Product discovery, PRD development, MVP prioritization, KPI definition, and stakeholder alignment.",
    details: [
      "Validated a $1.2M NOC opportunity through 50+ interviews, identifying workflows, adoption barriers, and success metrics.",
      "Established NOC operating infrastructure and Power BI reporting across six performance KPIs for leadership decisions.",
      "Launched an internal operations portal in SharePoint used by 20+ operators, centralizing resources and standardizing execution."
    ],
    website: "https://www.dewpoint.com",
    tags: ["Product", "KPI Analytics", "Strategy"]
  },
  {
    organization: "Consumers Energy",
    role: "Software Engineering Intern",
    dates: "May 2025 - Jun 2025",
    summary:
      "Built software and AI tools that reduced field-tracking errors by 35%, cut legal knowledge lookup time by 70%, and surfaced $300K per month in unclaimed customer benefits.",
    contribution:
      "Stakeholder discovery, full-stack development, workflow automation, and operational analytics.",
    details: [
      "Created a Python RAG pipeline across 5,000+ contract documents, cutting legal-team knowledge lookup time 70%.",
      "Built a C#/.NET and SQL operations platform for 500+ field users, replacing manual tracking and reducing errors by 35%.",
      "Automated compliance analysis across 1,500+ Power Apps, surfacing ownership, risk, and remediation priorities in Power BI.",
      "Surfaced $300K per month in unclaimed customer benefits by prototyping a SQL/Python rebate eligibility engine."
    ],
    website: "https://www.consumersenergy.com",
    tags: ["Energy", "Software", "Operations"]
  },
  {
    organization: "D-CYPHER Lab",
    role: "Research Assistant, Human-AI Systems",
    summary:
      "Built a human-robot research platform that accelerated task-allocation experiments and made testing cycles 4x faster.",
    contribution:
      "Experiment design, human-subject research, simulation, and quantitative analysis.",
    details: [
      "Built Python MILP and bandit-learning allocation across 1,000+ simulations, optimizing human-robot task assignment.",
      "Accelerated validation cycles 4x by building an AI-driven multi-agent simulation pipeline before human trials."
    ],
    website: "https://engineering.msu.edu/research",
    tags: ["Human-AI", "Experimentation", "Robotics"]
  },
  {
    organization: "MSU VEX-U Robotics",
    role: "Technical Program Lead",
    summary:
      "Led technical execution across 27 engineers, coordinating hardware and software delivery for a team ranked in the top 5% at VEX Worlds.",
    contribution:
      "Technical program leadership, systems integration, risk management, and competition operations.",
    details: [
      "Led sprints across 27 engineers, resolving blockers and coordinating integration through World Championship qualification.",
      "Increased scoring 20% by coordinating mechanical, electrical, and software efforts through telemetry-based adaptive strategies."
    ],
    website: "https://www.vexrobotics.com",
    tags: ["Robotics", "Program Leadership", "Integration"]
  },
  {
    organization: "Leo Burnett",
    role: "Creative Strategy Intern",
    summary:
      "Supported campaigns for McDonald's, Takis, and Jeep, from creative ideas to planning, execution, and launch.",
    contribution:
      "Creative ideation, brand planning, campaign strategy, and launch coordination.",
    website: "https://leoburnett.com",
    tags: ["GTM", "Advertising Strategy"]
  }
];
