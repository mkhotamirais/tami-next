import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiRedux,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";

export const menu = [
  { hash: "#home", label: "home" },
  { hash: "#about", label: "about" },
  { hash: "#project", label: "project" },
  { hash: "#skill", label: "skill" },
  { hash: "#contact", label: "contact" },
] as const;

export const skillList = [
  { icon: SiHtml5, label: "HTML" },
  { icon: SiCss3, label: "CSS" },
  { icon: SiJavascript, label: "Javascript" },
  { icon: SiTypescript, label: "Typescript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiBootstrap, label: "Bootstrap" },
  { icon: SiReact, label: "React" },
  { icon: SiMongodb, label: "Mongodb" },
  { icon: SiExpress, label: "Express" },
  { icon: SiNodedotjs, label: "NodeJs" },
  { icon: SiNextdotjs, label: "NextJs" },
  { icon: TbBrandFramerMotion, label: "Framer Motion" },
  { icon: SiRedux, label: "Redux" },
  { icon: SiMysql, label: "Mysql" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "Github" },
] as const;
