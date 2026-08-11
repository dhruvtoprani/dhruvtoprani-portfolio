export type RecognitionItem = {
  detail?: string;
  title: string;
};

export type InvolvementItem = {
  organization: string;
  role: string;
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
  { title: "2-Day Venture Challenge Winner" }
];

export const involvement: InvolvementItem[] = [
  { organization: "MSU Product Management Society", role: "President" },
  { organization: "Spartan Technical Consulting", role: "President" },
  { organization: "Tower Guard Honor Society", role: "President" },
  {
    organization: "Honors College Dean's Advisory Council",
    role: "Director of Public Relations"
  },
  { organization: "Humanity First MSU", role: "Director of Events" },
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
