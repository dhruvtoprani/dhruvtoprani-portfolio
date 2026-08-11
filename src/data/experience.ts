export type Experience = {
  organization: string;
  role: string;
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
    summary:
      "Turn customer discovery into paid pilots, owning growth from lead sourcing through onboarding and deployment milestones.",
    contribution:
      "Customer discovery, growth strategy, pilot ownership, positioning, and success metrics.",
    details: [
      "Synthesized 30+ interviews across three industries into prioritized requirements and positioning, driving 3+ signed letters of intent.",
      "Owned five paid pilots end to end, from sourcing leads to defining success metrics, onboarding, and deployment milestones."
    ],
    website: "https://gaiapredictive.com",
    tags: ["Growth", "Customer Discovery", "Pilots"]
  },
  {
    organization: "Whisker",
    role: "Software Technical Program Management Intern, Consumer Robots",
    summary:
      "Drive delivery for a 12-engineer robotics pod while building workflow automations that save program teams 30+ hours each week.",
    contribution:
      "Program execution, release coordination, workflow automation, and engineering operations.",
    details: [
      "Ran SAFe delivery for 12 engineers across PI Planning, ART Syncs, refinement, 6+ sprints, and a biweekly release cadence.",
      "Managed 40+ features in a program increment, performing RAID and capacity analysis to drive milestone and resource decisions.",
      "Automated reprioritization impact assessments and replanning with AWS Lambda, Claude, and Jira, saving 5+ TPMs 30+ hours each week."
    ],
    website: "https://www.whisker.com/about-us",
    tags: ["Robotics", "TPM", "Agile Delivery"]
  },
  {
    organization: "MSU Research Foundation",
    role: "Product Management Intern",
    summary:
      "Build lifecycle infrastructure across seven applications and five teams while translating user research into shipped product improvements.",
    contribution:
      "User research, UAT, CRM product ownership, analytics, and founder enablement.",
    details: [
      "Built a unified CRM pipeline across 7+ applications, centralizing lifecycle metrics and improving full-funnel visibility across five teams.",
      "Reduced LMS onboarding drop-off 35% through 50+ user interviews, funnel analysis, UAT, and shipped UX improvements.",
      "Developed a technical documentation-compression MCP adopted by 10+ startups, reducing AI token spend by up to 40%."
    ],
    website: "https://msufoundation.org",
    tags: ["Product", "CRM", "User Research"]
  },
  {
    organization: "Dewpoint Technology",
    role: "Product Management Intern",
    summary:
      "Defined a $1.2M product opportunity and shipped an operations portal and KPI dashboards used by 20+ network operators.",
    contribution:
      "Product discovery, PRD development, MVP prioritization, KPI definition, and stakeholder alignment.",
    details: [
      "Validated a $1.2M NOC opportunity through 50+ interviews, identifying workflows, adoption barriers, and success metrics.",
      "Established NOC operating infrastructure and Power BI reporting across six performance KPIs for leadership decisions.",
      "Launched a NOC portal in under six weeks, centralizing onboarding information and workflows used by 20+ operators."
    ],
    website: "https://www.dewpoint.com",
    tags: ["Product", "KPI Analytics", "Strategy"]
  },
  {
    organization: "Consumers Energy",
    role: "Software Engineering Intern",
    summary:
      "Shipped operations and AI workflow tools that improved field reporting efficiency by 35% and identified $300K per month in unclaimed rebates.",
    contribution:
      "Stakeholder discovery, full-stack development, workflow automation, and operational analytics.",
    details: [
      "Created a Python RAG pipeline across 5,000+ contract documents, cutting legal-team knowledge lookup time 70%.",
      "Built a C#/.NET and SQL operations platform for 500+ field users, improving storm-response reporting efficiency 35%.",
      "Automated compliance analysis across 1,500+ Power Apps, surfacing ownership, risk, and remediation priorities in Power BI.",
      "Architected a SQL/Python eligibility model uncovering a $300K monthly incentive gap and projecting 23% higher program capture."
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
