export const webDesignMenu = [
  {
    href: "/web-design/layouting",
    label: "Layouting",
    description: "beberapa contoh model layouting mulai dari header, content hingga footer",
  },
  { href: "/web-design/e-commerce", label: "E-Commerce", description: "beberapa contoh tampilain UI E-Commerce" },
  { href: "/web-design/portfolio", label: "Portoflio", description: "beberapa contoh tampilan UI Portfolio" },
  { href: "/web-design/school", label: "School", description: "beberapa contoh tampilan school" },
  { href: "/web-design/blog", label: "Blog", description: "beberapa contoh tampilan blog" },
  { href: "/web-design/news", label: "News", description: "beberapa contoh tampilan news" },
];

export const layoutingMenu = [
  { href: "/web-design/layouting/sections", label: "sections", description: "section description" },
  { href: "/web-design/layouting/header", label: "header", description: "header description" },
  { href: "/web-design/layouting/footer", label: "footer", description: "footer description" },
  { href: "/web-design/layouting/content", label: "content", description: "content description" },
];

export const eCommerceMenu = [
  { href: "#", label: "e-commerce 1", description: "description e-commerce 1" },
  { href: "#", label: "e-commerce 1", description: "description e-commerce 2" },
];

export const blogMenu = [
  { href: "", label: "blog-1", description: "deskripsi blog 1" },
  { href: "", label: "blog-2", description: "deskripsi blog 2" },
];

export const newsMenu = [
  { href: "", label: "news 1", description: "deskripsi news 1" },
  { href: "", label: "news 2", description: "deskripsi news 2" },
];

export const schoolMenu = [
  { href: "", label: "school 1", description: "deskripsi school 1" },
  { href: "", label: "school 2", description: "deskripsi school 2" },
];

export const portofolioMenu = [
  { href: "", label: "portofolio 1", description: "deskripsi portofolio 1" },
  { href: "", label: "portofolio 2", description: "deskripsi portofolio 2" },
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
