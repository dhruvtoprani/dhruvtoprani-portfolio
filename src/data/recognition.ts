export type RecognitionItem = {
  detail?: string;
  title: string;
};

export type InvolvementItem = {
  organization: string;
  role: string;
  detail?: string;
};

export const awards: RecognitionItem[] = [
  {
    title: "Engineering Undergraduate Service Award",
    detail: "Top 0.1%"
  },
  { title: "Presidential Scholar", detail: "Top 1%" },
  { title: "Honors Professorial Assistantship", detail: "Top 5%" },
  { title: "Dr. Kun Mu Chen Scholar", detail: "ECE Excellence" },
  { title: "Wielenga Honors Research Scholar" },
  { title: "UURAF First Place Award", detail: "2x recipient" },
  { title: "Dean's List" },
  { title: "2-Day Venture Challenge Winner", detail: "HexaFlow" },
  { title: "MSU Designathon", detail: "1st place / 6Dot" }
];

export const involvement: InvolvementItem[] = [
  {
    organization: "MSU VEX-U Robotics Team",
    role: "Program Manager",
    detail: "Led sprints across 27 engineers to qualify for the World Finals, ranking in the top 5% globally."
  },
  { organization: "MSU Product Management Society", role: "President" },
  {
    organization: "Spartan Technical Consulting",
    role: "President",
    detail: "Serving 3+ client engagements across product design, AI implementation, and PCB design."
  },
  {
    organization: "Tower Guard Honor Society",
    role: "President",
    detail: "Led an 80-member service organization, coordinating 6,000+ volunteer hours and raising $20K for accessibility."
  },
  {
    organization: "Honors College Dean's Advisory Council",
    role: "Director of Public Relations"
  },
  {
    organization: "Humanity First MSU",
    role: "Director of Events",
    detail: "Raised $40K to support disaster relief initiatives and medical mission trips serving 65+ countries."
  },
  {
    organization: "D-Cypher Lab",
    role: "Researcher",
    detail: "Developed resource-allocation algorithms for mixed teams; earned first place across Engineering, Computer Science, and Math."
  },
  {
    organization: "Undergraduate International Indian Student Association",
    role: "Director of Outreach"
  },
  {
    organization: "MSU International Relations Organization",
    role: "Assistant Vice President, Conference Preparation"
  },
  { organization: "Undergraduate Research Office", role: "Research Mentor" },
  { organization: "Michigan State University", role: "Resident Assistant" }
];

export const recognitionMarquee = [
  "Service",
  "Leadership",
  "Research",
  "Mentorship",
  "Community",
  "Initiative",
  "Public speaking",
  "Team building"
] as const;
