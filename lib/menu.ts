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

// web design menu
export const webDesignMenu = [
  { href: "/web-design/e-commerce", label: "E-Commerce", description: "beberapa contoh tampilain UI E-Commerce" },
  { href: "/web-design/portfolio", label: "Portoflio", description: "beberapa contoh tampilan UI Portfolio" },
  { href: "/web-design/landing-page", label: "Landing Page", description: "beberapa contoh tampilan landing page" },
  {
    href: "/web-design/layouting",
    label: "Layouting",
    description: "beberapa contoh model layouting mulai dari header, content hingga footer",
  },
];

export const webDesignTheoryMenu = [
  {
    title: "Portfolio",
    subTitle: [
      {
        title: "basic",
        paragraph: [
          `portofolios goal is to convey who you are and what you can do. Anything from typewriter effects particle
              backrounds or cursor trails just look gimmicky and outdated. then avoid skill bars because its super
              subjective`,
          `halo semua`,
        ],
      },
      { title: "lainnya", paragraph: [] },
    ],
    links: [
      { href: "", label: "" },
      { href: "", label: "" },
    ],
  },
  {
    title: "Layouting",
    subTitle: [
      {
        title: "header",
        paragraph: [
          `uses & types: logo (who are ayou), link (what important pages they are), cta; some use search (jika page lebih
        dari 40), cart, user. type: sticky (recommended);`,
          `design: left; icon based; hidden with button; case studies & statistics; accessibility; seo impact; making it better`,
        ],
      },
      { title: "footer", paragraph: [] },
      { title: "content", paragraph: [] },
    ],
    links: [
      { href: "https://godly.website/", label: "godly" },
      { href: "https://www.darkmodedesign.com/", label: "dark mode design" },
      { href: "https://minimal.gallery/", label: "minimal gallery" },
      { href: "https://maxibestof.one/", label: "maxibestof" },
      { href: "https://www.landingfolio.com/", label: "landingfolio" },
      { href: "https://dribbble.com/following", label: "dribbble" },
      { href: "https://www.pinterest.com/", label: "pinterest" },
      { href: "https://www.behance.net/onboarding/adobe", label: "behance" },
      { href: "https://wireframe.cc/", label: "wireframe.cc" },
      { href: "https://www.mockplus.com/", label: "mockplus" },
      { href: "https://www.brillmark.com/", label: "brillmark" },
      { href: "https://www.orbitmedia.com/blog/web-design-standards/", label: "web design standard" },
      { href: "https://vwo.com/", label: "vwo" },
      { href: "https://www.nngroup.com/", label: "nngroup" },
    ],
  },
];

export const layoutingMenu = [
  { href: "/web-design/layouting/header", label: "header" },
  { href: "/web-design/layouting/footer", label: "footer" },
  { href: "/web-design/layouting/content", label: "content" },
  { href: "", label: "" },
];

export const sampelNavMenu = [
  { hash: "#home", href: "#", label: "home" },
  { hash: "#about", href: "#", label: "about" },
  { hash: "#project", href: "#", label: "project" },
  { hash: "#services", href: "#", label: "services" },
  { hash: "#contact", href: "#", label: "contact" },
];

export const sampelNavMenuWithDrop = [
  { hash: "#home", href: "#", label: "home", drop: [] },
  {
    hash: "#about",
    href: "#",
    label: "about",
    drop: [
      { hash: "#", href: "#", label: "about1" },
      { hash: "#", href: "#", label: "about2" },
      { hash: "#", href: "#", label: "about3" },
      { hash: "#", href: "#", label: "about4" },
    ],
  },
  { hash: "#project", href: "#", label: "project", drop: [] },
  {
    hash: "#services",
    href: "#",
    label: "services",
    drop: [
      { hash: "#", href: "#", label: "service1" },
      { hash: "#", href: "#", label: "service2" },
      { hash: "#", href: "#", label: "service3" },
      { hash: "#", href: "#", label: "service4" },
    ],
  },
  { hash: "#contact", href: "#", label: "contact", drop: [] },
];
