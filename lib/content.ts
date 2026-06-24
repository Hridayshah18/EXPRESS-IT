import {
  ChartNoAxesCombined,
  Compass,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Lightbulb,
  MessageCircle,
  Orbit,
  Puzzle,
  School,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Challenge = {
  title: string;
  eyebrow: string;
  description: string;
  visual: "cubes" | "fog" | "stairs" | "lights" | "bubbles";
  color: string;
  icon: LucideIcon;
};

export type Portal = {
  title: string;
  range: string;
  description: string;
  color: string;
  icon: LucideIcon;
};

export type Program = {
  title: string;
  audience: string;
  description: string;
  image: string;
  accent: string;
  icon: LucideIcon;
};

export type Game = {
  slug: string;
  title: string;
  description: string;
  difficulty: "Starter" | "Explorer" | "Challenger" | "Pro";
  progress: number;
  accent: string;
  bg: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Framework", href: "#framework" },
  { label: "Programs", href: "#programs" },
  { label: "Mind Gym", href: "#mind-gym" },
  { label: "Parent Hub", href: "#parent-hub" },
];

export const challenges: Challenge[] = [
  {
    title: "Stress",
    eyebrow: "Chapter 01",
    description:
      "Students carry invisible pressure from exams, expectations, deadlines, and comparison. EXPRESS IT turns pressure into language, support, and action.",
    visual: "cubes",
    color: "#4F46E5",
    icon: ShieldCheck,
  },
  {
    title: "Anxiety & Confusion",
    eyebrow: "Chapter 02",
    description:
      "When thoughts feel foggy, young people need simple ways to name feelings, map choices, and see a next step.",
    visual: "fog",
    color: "#14B8A6",
    icon: Compass,
  },
  {
    title: "Academic Pressure",
    eyebrow: "Chapter 03",
    description:
      "Competition culture can make identity feel like a scoreboard. We help students build performance with self-awareness, not fear.",
    visual: "stairs",
    color: "#F59E0B",
    icon: GraduationCap,
  },
  {
    title: "Emotional Guidance",
    eyebrow: "Chapter 04",
    description:
      "Emotional literacy is rarely taught like a life skill. EXPRESS IT builds tools that feel practical, friendly, and repeatable.",
    visual: "lights",
    color: "#22C55E",
    icon: Lightbulb,
  },
  {
    title: "Communication Gaps",
    eyebrow: "Chapter 05",
    description:
      "Children, parents, peers, and schools often speak past one another. We turn disconnected signals into safer conversations.",
    visual: "bubbles",
    color: "#F43F5E",
    icon: MessageCircle,
  },
];

export const portals: Portal[] = [
  {
    title: "Kids",
    range: "6-12",
    description:
      "Playful emotional vocabulary, confidence rituals, and expression activities that make self-understanding feel natural.",
    color: "#22C55E",
    icon: Sparkles,
  },
  {
    title: "Teenagers",
    range: "13-19",
    description:
      "Identity, resilience, communication, and pressure-management tools designed for modern teen attention patterns.",
    color: "#4F46E5",
    icon: Orbit,
  },
  {
    title: "Parents",
    range: "Guides",
    description:
      "Clear resources, workshops, and conversation frameworks that help families respond instead of react.",
    color: "#F59E0B",
    icon: HeartHandshake,
  },
];

export const stats = [
  { label: "Students Helped", value: 12000, suffix: "+", icon: Users },
  { label: "Programs Conducted", value: 450, suffix: "+", icon: ChartNoAxesCombined },
  { label: "Schools Reached", value: 85, suffix: "+", icon: School },
  { label: "Parents Engaged", value: 7200, suffix: "+", icon: HeartHandshake },
];

export const programs: Program[] = [
  {
    title: "Kids Programs",
    audience: "Confidence through play",
    description:
      "Story-based expression, feelings vocabulary, kindness missions, and social confidence labs.",
    image: "/images/programs/kids-programs.png",
    accent: "#22C55E",
    icon: Sparkles,
  },
  {
    title: "Teen Programs",
    audience: "Pressure-proof skills",
    description:
      "Identity, exam resilience, communication, peer pressure, focus, and leadership experiences.",
    image: "/images/programs/teen-programs.png",
    accent: "#4F46E5",
    icon: Zap,
  },
  {
    title: "Parent Workshops",
    audience: "Calmer homes",
    description:
      "Practical conversation tools for emotions, screen habits, confidence, and academic pressure.",
    image: "/images/programs/parent-workshops.png",
    accent: "#F59E0B",
    icon: HeartHandshake,
  },
  {
    title: "School Partnerships",
    audience: "Whole-campus growth",
    description:
      "Assemblies, workshops, educator resources, and wellbeing programs designed for repeat impact.",
    image: "/images/programs/school-partnerships.png",
    accent: "#14B8A6",
    icon: Landmark,
  },
];

export const games: Game[] = [
  {
    slug: "patternmind",
    title: "PATTERNMIND",
    description:
      "Notice emotional and visual patterns, then choose a calmer next step.",
    difficulty: "Starter",
    progress: 38,
    accent: "#22C55E",
    bg: "from-emerald-400 via-teal-500 to-cyan-600",
    icon: Puzzle,
  },
  {
    slug: "bollyverse",
    title: "BOLLYVERSE",
    description:
      "Read expressions, scenes, and social cues through guided reflection prompts.",
    difficulty: "Explorer",
    progress: 22,
    accent: "#F59E0B",
    bg: "from-amber-400 via-rose-500 to-fuchsia-600",
    icon: Sparkles,
  },
  {
    slug: "chain-reaction",
    title: "CHAIN REACTION",
    description:
      "Practice cause-and-effect thinking for choices, reactions, and relationships.",
    difficulty: "Challenger",
    progress: 16,
    accent: "#4F46E5",
    bg: "from-indigo-500 via-blue-600 to-slate-900",
    icon: Zap,
  },
  {
    slug: "rainbow-flow",
    title: "RAINBOW FLOW",
    description:
      "Build focus and emotional regulation through gentle color-flow practice.",
    difficulty: "Pro",
    progress: 9,
    accent: "#F43F5E",
    bg: "from-rose-400 via-orange-400 to-violet-600",
    icon: Orbit,
  },
];

export const parentHub = [
  "Parenting Resources",
  "Communication Tips",
  "Workshops",
  "Guides",
];

export const roadmap = [
  {
    year: "2025",
    title: "Foundation",
    detail: "Launch workshops, parent resources, and the first EXPRESS framework experiences.",
  },
  {
    year: "2026",
    title: "Mind Gym",
    detail: "Release the first guided practice tools for focus, emotional regulation, and self-awareness.",
  },
  {
    year: "2028",
    title: "School OS",
    detail: "Scale educator dashboards, school programs, and guided family journeys.",
  },
];
