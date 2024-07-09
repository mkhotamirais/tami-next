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

export const layoutingMenu = [
  { href: "/web-design/layouting/sections", label: "sections", description: "section description" },
  { href: "/web-design/layouting/header", label: "header", description: "header description" },
  { href: "/web-design/layouting/footer", label: "footer", description: "footer description" },
  { href: "/web-design/layouting/content", label: "content", description: "content description" },
];

// banyak
export const webDesignTheoryMenu = [
  {
    title: "Portfolio",
    paragraph: [`portofolio par1`, `portofolio par2`],
    subTitle: [
      {
        title: "basic",
        paragraph: [
          `portofolios goal is to convey who you are and what you can do. Anything from typewriter effects particle
              backrounds or cursor trails just look gimmicky and outdated. then avoid skill bars because its super
              subjective`,
          `halo semua`,
        ],
        links: [
          { href: "", label: "" },
          { href: "", label: "" },
        ],
      },
      {
        title: "portofolio lainnya",
        paragraph: [`lainnya par1`, `lainnya par2`],
        links: [
          { href: "#", label: "link1" },
          { href: "#", label: "link2" },
        ],
      },
    ],
    links: [
      { href: "#", label: "link1" },
      { href: "#", label: "link2" },
    ],
  },
  {
    title: "Layouting",
    paragraph: [`layouting par1`, `layouting par2`],
    subTitle: [
      {
        title: "sections",
        paragraph: [
          `Three Principals: basic principals of laying out the page; designing out sections to use; laying out pages`,
          `First: basic principals, every page is made up of rows and each rows is a separate idea. ROW: hero; about; event and news; each rows have a difference idea which mean should never be 2 different idea in it; each row is made visually distinct; hero has a background image above it white background, above white, blue, white and so on`,
          `Second: the background of rows should not be the same twice in a row unless it's already visually distinct; you can also have rows that have multiple rows inside them but this only works if the content is related. it's not only about separating the rows more is about separating the ideas; if you working on a website with tipical color scheme which is white color rather a dark mode style if you want use #f7f7f7, you can also add background image for rows and use primary color for them; the idea here is to make the sections visually distinct.Each rows should have some vertical padding on it. having this padding will make the layout look a whole cleaner and ridable`,
          `Third: the last important thing you nedd to know about layouting the website is that you need the content first, before layouting. this is important thing to realize because when designing a proper website content should always come first and that design should reflect that.`,
        ],
        links: [
          { href: "https://www.ekal.org/", label: "ekal vidyalaya" },
          { href: "#", label: "link2" },
        ],
      },
      {
        title: "header",
        paragraph: [
          `uses & types: logo (who are ayou), link (what important pages they are), cta; some use search (jika page lebih
        dari 40), cart, user. type: sticky (recommended);`,
          `design: left; icon based; hidden with button; case studies & statistics; accessibility; seo impact; making it better`,
        ],
        links: [
          { href: "#", label: "link1" },
          { href: "#", label: "link2" },
        ],
      },
      {
        title: "footer",
        paragraph: [
          `uses & types; design; make them useful; statistics & a/b testing; seo impact`,
          `there are three types of footer, normal, infinite scroll/mini and contextual. infinite scroll like linked the footer place at the right bar`,
        ],
        links: [
          { href: "https://sertus.uk/", label: "sertus" },
          { href: "https://suparise.com/", label: "suparise" },
        ],
      },
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
