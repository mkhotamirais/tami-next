import Link from "next/link";
import SearchAnime from "./SearchAnime";
import { FaFilm, FaGithub, FaUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="z-50 h-16 bg-jikan-primary-1 px-3 sticky top-0">
      <nav className="flex justify-between gap-2 items-center h-full">
        <Link href="/fullstack/anime" className="text-jikan-accent-1 text-xl font-bold">
          Jikan Api
        </Link>
        <SearchAnime />
        <div className="flex gap-4 text-jikan-accent-1 text-xl">
          <a title="source code" href="https://github.com/mkhotamirais/tami-next">
            <FaGithub />
          </a>
          <a title="source movie: jikan" href="">
            <FaFilm />
          </a>
        </div>
      </nav>
    </header>
  );
}
