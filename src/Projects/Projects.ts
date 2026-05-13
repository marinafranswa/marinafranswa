import linkedPost from "@/assets/Screenshot 2026-05-03 185739.png";
import freshCart from "@/assets/Screenshot 2026-05-06 025544.png";
import adasa from "@/assets/Screenshot 2026-05-06 025908.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  liveLink: string;
  link: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  image: StaticImageData;
  tag: string;
  tagColor: string;
  iconBg: string;
  gridBg: string;
  gridLine: string;
  accent: string;
};


export const projects: Project[] = [
  {
    title: "FreshCart",
    liveLink: "https://fresh-cart-by-marina.vercel.app/",
    link: "https://github.com/marinafranswa/freshCart-by-marina",
    subtitle: "E-commerce Web Application",
    description:
      "A performant e-commerce frontend built with Next.js leveraging SSR and SSG for exceptional SEO and load times, complete with carousels, cart management, and dynamic rendering.",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS", "Swiper.js", "Fetch API"],
    highlights: [
      "SSR & SSG for improved performance and SEO",
      "Reusable accessible UI components with Shadcn UI",
      "Product carousels with Swiper.js integration",
      "Responsive design across all device sizes",
    ],
    image: freshCart,
    tag: "E-commerce",
    tagColor: "bg-sky/10 border-sky/25 text-sky",
    iconBg: "bg-sky/10 border-sky/25 text-sky",
    gridBg: "from-sky/10 to-purple/10",
    gridLine: "rgba(56,189,248,0.1)",
    accent: "text-sky",
  },
  {
    title: "LinkedPosts",
    liveLink: "https://linked-posts-app-seven.vercel.app/auth/login",
    link: "https://github.com/marinafranswa/linked-posts-app",
    subtitle: "Social Media Web Application",
    description:
      "A full-featured social media platform with modular React component architecture, server-state management, and seamless dynamic routing for an engaging social experience.",
    tech: [
      "React.js",
      "React Query",
      "Hero UI",
      "Tailwind CSS",
      "Axios",
      "Git",
    ],
    highlights: [
      "Modular component library — improved code reusability",
      "React Query for data fetching, caching & synchronization",
      "Accessible UI with dynamic routing for seamless navigation",
      "RESTful API integration with optimized rendering performance",
    ],
    image: linkedPost,
    tag: "Social Platform",
    tagColor: "bg-pink/10 border-pink/25 text-pink",
    iconBg: "bg-pink/10 border-pink/25 text-pink",
    gridBg: "from-pink/10 to-purple/10",
    gridLine: "rgba(255,110,180,0.1)",
    accent: "text-pink",
  },
  {
    title: "Adasa",
    liveLink: "https://adasa-app-three.vercel.app/",
    link: "https://github.com/marinafranswa/adasa-app",
    subtitle: "Blog Web Application",
    description:
      "A blog specializing in the art of experimental photography, we share with you the secrets of professionals and essential tips for your skills.",
    tech: ["React.js", "CSS", "Bootstrap", "JavaScript", "Fetch API"],
    highlights: [
      "Using plain JavaScript to fetch data",
      "Reusable accessible UI components with Bootstrap",
      "Searching and exploring the various blogs",
      "Responsive design across all device sizes",
    ],
    image: adasa,
    tag: "Blog",
    tagColor: "bg-sky/10 border-sky/25 text-sky",
    iconBg: "bg-sky/10 border-sky/25 text-sky",
    gridBg: "from-sky/10 to-purple/10",
    gridLine: "rgba(56,189,248,0.1)",
    accent: "text-sky",
  },
];
