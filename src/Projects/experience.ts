export type TimelineItem = {
  iconBg: string;
  title: string;
  org: string;
  orgColor: string;
  date: string;
  description: string;
  highlights: string[];
};
export const items: TimelineItem[] = [
  {
    iconBg: "bg-amber-500",
    title: "Frontend Development Diploma",
    org: "Route Academy — Route IT Training Center",
    orgColor: "text-amber-400",
    date: "Sep 2025 – Apr 2026",
    description:
      "Awarded for Outstanding Performance and Being One of the Top Achievers in the Frontend Development Diploma.",
    highlights: [],
  },
  {
    iconBg: "bg-pink-500",
    title: "Frontend Developer",
    org: "Storia · Alexandria, Egypt",
    orgColor: "text-teal-400",
    date: "Feb 2024 – Jul 2025",
    description:
      "Built responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap based on Figma designs. Collaborated with designers and backend developers in an Agile environment.",
    highlights: [
      "Integrated RESTful APIs using Fetch API, managing dynamic data & UI states",
      "Improved performance by optimizing code and reducing load times",
      "Ensured cross-browser compatibility and full mobile responsiveness",
      "Used Git/GitLab for version control, feature branching & code reviews",
    ],
  },
  {
    iconBg: "bg-teal-500",
    title: "B.Sc. Computers and Information Technology",
    org: "Alexandria University & Egyptian E-Learning University",
    orgColor: "text-amber-400",
    date: "Graduated Jul 2023",
    description:
      "Joint program combining computer science fundamentals with practical information technology skills.",
    highlights: [],
  },
];
