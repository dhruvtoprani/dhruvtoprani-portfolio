export type Experience = {
  organization: string;
  role: string;
  summary: string;
  contribution: string;
  website: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    organization: "Whisker",
    role: "Technical Program Management Intern",
    summary:
      "Drive delivery for a 12-engineer robotics pod while building workflow automations that save program teams 30+ hours each week.",
    contribution:
      "Program execution, release coordination, workflow automation, and engineering operations.",
    website: "https://www.whisker.com/about-us",
    tags: ["Robotics", "TPM", "Agile Delivery"]
  },
  {
    organization: "D-CYPHER Lab",
    role: "Research Intern",
    summary:
      "Built a human-robot research platform that accelerated task-allocation experiments and made testing cycles 4x faster.",
    contribution:
      "Experiment design, human-subject research, simulation, and quantitative analysis.",
    website: "https://engineering.msu.edu/research",
    tags: ["Human-AI", "Experimentation", "Robotics"]
  },
  {
    organization: "Consumers Energy",
    role: "Software Engineering Intern",
    summary:
      "Shipped operations and AI workflow tools that improved field reporting efficiency by 35% and identified $300K per month in unclaimed rebates.",
    contribution:
      "Stakeholder discovery, full-stack development, workflow automation, and operational analytics.",
    website: "https://www.consumersenergy.com",
    tags: ["Energy", "Software", "Operations"]
  },
  {
    organization: "Dewpoint Technology",
    role: "Product Management Intern",
    summary:
      "Defined a $1.2M product opportunity and shipped an operations portal and KPI dashboards used by 20+ network operators.",
    contribution:
      "Product discovery, PRD development, MVP prioritization, KPI definition, and stakeholder alignment.",
    website: "https://www.dewpoint.com",
    tags: ["Product", "KPI Analytics", "Strategy"]
  },
  {
    organization: "MSU Research Foundation",
    role: "Product Management Intern",
    summary:
      "Own a three-team CRM product, translating user research into changes that reduced onboarding drop-off by 35%.",
    contribution:
      "User research, UAT, CRM product ownership, analytics, and founder enablement.",
    website: "https://msufoundation.org",
    tags: ["Product", "CRM", "User Research"]
  },
  {
    organization: "MSU VEX-U Robotics",
    role: "Technical Program Lead",
    summary:
      "Led technical execution across 27 engineers, coordinating hardware and software delivery for a team ranked in the top 5% at VEX Worlds.",
    contribution:
      "Technical program leadership, systems integration, risk management, and competition operations.",
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
