import { IoBookOutline, IoGlobe, IoLaptopOutline } from "react-icons/io5";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";

export const menu = [
  { href: "/learning", label: "Learning", icon: IoBookOutline },
  { href: "/web-design", label: "Web Design", icon: IoGlobe },
  { href: "/fullstack", label: "Fullstack", icon: TbBrandNextjs },
  // {
  //   label: "Nextjs",
  //   icon: TbBrandNextjs,
  //   description: "",
  //   subMenus: [
  //     { href: "/routing-1", label: "routing 1" },
  //     { href: "/routing-2", label: "routing 2" },
  //   ],
  // },
  // {
  //   label: "Landing",
  //   icon: IoLaptopOutline,
  //   description: "Contains several landing page models from various types of websites.",
  //   subMenus: [
  //     { href: "/porto-1", label: "porto 1" },
  //     { href: "/porto-2", label: "porto 2" },
  //   ],
  // },
  // {
  //   label: "Typescript",
  //   icon: TbBrandTypescript,
  //   description: "deskripsi",
  //   subMenus: [
  //     { href: "/ts-1", label: "ts 1" },
  //     { href: "/ts-2", label: "ts 2" },
  //     { href: "/ts-3", label: "ts 3" },
  //   ],
  // },
];

export const learningMenu = [
  { href: "/learning/typescript", label: "Typescript" },
  { href: "/learning/nextjs", label: "NextJs" },
];

export const fullstackMenu = [
  { href: "/fullstack/full1", label: "full1" },
  { href: "/fullstack/full2", label: "full2" },
];

export const learningNextjsMenu = [
  { href: "/learning/nextjs/r1-basic", label: "route 1 basic" },
  { href: "/learning/nextjs/_r2-private", label: "route 2 private" },
  { href: "/learning/nextjs/r3-group-1", label: "route 3 group 1" },
  { href: "/learning/nextjs/r3-group-2", label: "route 3 group 2" },
  { href: "/learning/nextjs/r4-dinamic", label: "route 3 dinamic" },
  { href: "/learning/nextjs/r4-dinamic/1", label: "route 3 dinamic id 1" },
  { href: "/learning/nextjs/r4-dinamic/2", label: "route 3 dinamic id 2" },
] as const;

export const learningTypescriptMenu = [
  { href: "/learning/typescript/basic", label: "basic" },
  { href: "/learning/typescript/usestate", label: "useState" },
  { href: "/learning/typescript/usereducer", label: "useReducer" },
  { href: "/learning/typescript/useref", label: "useRef" },
  { href: "/learning/typescript/usecontext", label: "useContext" },
  { href: "/learning/typescript/lainnya", label: "lainnya" },
] as const;
