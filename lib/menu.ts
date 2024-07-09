import { IoBookOutline, IoGlobe } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

export const menu = [
  { href: "/learning", label: "Learning", icon: IoBookOutline },
  { href: "/web-design", label: "Web Design", icon: IoGlobe },
  { href: "/fullstack", label: "Fullstack", icon: TbBrandNextjs },
];

// learning menu
export const learningMenu = [
  { href: "/learning/typescript", label: "Typescript" },
  { href: "/learning/nextjs", label: "NextJs" },
];

export const learningTypescriptMenu = [
  { href: "/learning/typescript/basic", label: "basic" },
  { href: "/learning/typescript/usestate", label: "useState" },
  { href: "/learning/typescript/usereducer", label: "useReducer" },
  { href: "/learning/typescript/useref", label: "useRef" },
  { href: "/learning/typescript/usecontext", label: "useContext" },
  { href: "/learning/typescript/lainnya", label: "lainnya" },
  { href: "/learning/typescript/lainnya2", label: "lainnya2" },
] as const;

export const learningNextjsMenu = [
  { href: "/learning/nextjs/r1-basic", label: "route 1 basic" },
  { href: "/learning/nextjs/_r2-private", label: "route 2 private" },
  { href: "/learning/nextjs/r3-group-1", label: "route 3 group 1" },
  { href: "/learning/nextjs/r3-group-2", label: "route 3 group 2" },
  { href: "/learning/nextjs/r4-dinamic", label: "route 3 dinamic" },
  { href: "/learning/nextjs/r4-dinamic/1", label: "route 3 dinamic id 1" },
  { href: "/learning/nextjs/r4-dinamic/2", label: "route 3 dinamic id 2" },
] as const;

// fullstack menu
export const fullstackMenu = [
  { href: "/fullstack/full1", label: "full1" },
  { href: "/fullstack/full2", label: "full2" },
];
