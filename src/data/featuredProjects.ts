export type FeaturedProject = {
  name: string;
  category: string;
  hook: string;
  description: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  metric?: string;
  metricLabel?: string;
  github?: string;
  demo?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "SunSight",
    category: "Sustainability / Energy",
    hook: "Estimate rooftop solar potential from an address and map region.",
    description:
      "Turns an address and selected rooftop area into a capacity, placement, and ROI estimate.",
    stack: ["Next.js", "TypeScript", "Python", "OpenCV", "Geospatial APIs"],
    image: "/work/sunsight.jpg",
    imageAlt:
      "Solar planning workspace with satellite imagery, layout metrics, and ROI analysis",
    metric: "23.7 kW",
    metricLabel: "Modeled solar capacity"
  },
  {
    name: "AtlasFX",
    category: "Global Systems / Data Visualization",
    hook: "A global movement map for currency shocks and macro patterns.",
    description:
      "Maps exchange-rate movement, volatility, correlations, and historical macro shocks across countries.",
    stack: ["Next.js", "TypeScript", "Python", "Frankfurter API", "Mapbox"],
    image: "/work/atlasfx.png",
    imageAlt:
      "AtlasFX global currency stress map and live macro risk dashboard",
    metric: "30",
    metricLabel: "Markets monitored",
    github: "https://github.com/dhruvtoprani/atlasfx",
    demo: "https://atlasfx-zeta.vercel.app"
  },
  {
    name: "CivSense",
    category: "Simulation / Multi-Agent Systems",
    hook: "A parametric testbed for studying how societies respond to shocks.",
    description:
      "Lets users change starting conditions, inject shocks, and compare outcomes across agents, resources, infrastructure, and governance.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Plotly"],
    image: "/work/civsense.png",
    imageAlt:
      "CivSense parametric civilization simulation dashboard with configurable scenarios",
    metric: "500",
    metricLabel: "Adaptive agents"
  },
  {
    name: "RatRadar NYC",
    category: "Civic Intelligence / Machine Learning",
    hook: "Predict next-week rodent complaint surges across 177 NYC ZIP areas.",
    description:
      "Forecasts neighborhood complaint surges using public 311 data, XGBoost, and SHAP.",
    stack: ["Python", "XGBoost", "SHAP", "NYC Open Data"],
    image: "/work/ratradar-risk-map.png",
    imageAlt:
      "RatRadar NYC geospatial risk map showing predicted complaint surges across ZIP areas",
    github: "https://github.com/dhruvtoprani/ratradar-nyc",
    demo: "https://ratradar-nyc.vercel.app"
  },
  {
    name: "DocFlow MCP",
    category: "AI Developer Tools / MCP",
    hook: "Turn messy documentation pages into clean implementation context.",
    description:
      "Strips navigation and page clutter before sending implementation-ready documentation to AI coding tools.",
    stack: ["TypeScript", "MCP", "Next.js", "Content Extraction"],
    image: "/work/docflow.png",
    imageAlt:
      "DocFlow MCP interface for clipping documentation into implementation-ready context",
    github: "https://github.com/dhruvtoprani/docflow-mcp",
    demo: "https://docflow-mcp.vercel.app"
  },
  {
    name: "PreFlight AI",
    category: "AI Workflow / Stakeholder Intelligence",
    hook: "Pressure-test initiatives before the first stakeholder meeting.",
    description:
      "A Slack-native intelligence layer that maps risks, blockers, owners, and sequencing questions from Jira, Confluence, and team context.",
    stack: ["Python", "Slack", "Jira", "Confluence", "AI Agents"],
    github: "https://github.com/dhruvtoprani/preflight-AI"
  },
  {
    name: "Pathway Command Center",
    category: "Operations / Cohort Management",
    hook: "A full-stack operating dashboard for high-touch mentorship programs.",
    description:
      "Centralizes student progress, risk signals, advising history, assignments, and supervisor reporting for a previously fragmented workflow.",
    stack: ["TypeScript", "Next.js", "Operations", "Analytics"],
    github: "https://github.com/dhruvtoprani/ptr-tracker",
    demo: "https://ptr-tracker.vercel.app"
  },
  {
    name: "Human-Robot Allocation Testbeds",
    category: "Human-AI Collaboration / Robotics",
    hook: "Preference-aware task allocation across robots, drones, and human teams.",
    description:
      "A family of experimental interfaces for multi-agent fire response, drone deployment, risk profiles, and bandit-based task allocation.",
    stack: ["MATLAB", "JavaScript", "Multi-Agent Systems", "Optimization"],
    github:
      "https://github.com/dhruvtoprani/testbed-multiagent_fire_respose",
    demo: "https://testbed-multiagent-fire-respose.vercel.app"
  },
  {
    name: "WattX",
    category: "Sustainability / Microgrids / AI Agents",
    hook: "A peer-to-peer microgrid simulation shipped at HackDearborn.",
    description:
      "An AI-assisted microgrid coordination tool for modeling local energy sharing, household demand, and community-level sustainability behavior.",
    stack: ["Python", "Flask", "Supabase", "Fetch.ai"]
  }
];
