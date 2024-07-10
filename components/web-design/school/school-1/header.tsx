import Link from "next/link";
import { FaMagnifyingGlass, FaSchool } from "react-icons/fa6";

const menu = [
  { href: "/web-design/school/school-1/about-us", label: "about us" },
  { href: "/web-design/school/school-1/admissions", label: "admissions" },
  { href: "/web-design/school/school-1/academics", label: "academics" },
  { href: "/web-design/school/school-1/student-life", label: "student life" },
  { href: "/web-design/school/school-1/parent-resources", label: "parent resources" },
  { href: "/web-design/school/school-1/news-and-events", label: "news & events" },
  { href: "/web-design/school/school-1/contact-us", label: "contact us" },
  { href: "/web-design/school/school-1/career-opportunities", label: "career" },
];

export default function Header() {
  return (
    <header className="h-16 border-b sitcky top-0">
      <div className="h-full flex px-3 max-w-6xl mx-auto justify-between items-center">
        <Link href="/web-design/school/school-1" className="text-3xl">
          <FaSchool />
        </Link>
        <div className="gap-1 lg:flex hidden">
          {menu.map((item, index) => (
            <Link href={item.href} key={index} replace className="text-sm capitalize border p-2">
              {item.label}
            </Link>
          ))}
          <button type="button" aria-label="search">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </header>
  );
}
