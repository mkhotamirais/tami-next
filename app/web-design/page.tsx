"use client";

import { useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useWebDesignArticle } from "@/store/useWebDesignArticle";
import { webDesignMenu } from "@/lib/web-design-menu";
import BoxCard from "@/components/BoxCard";
import { webDesignArticles } from "@/lib/web-design-articles";

export default function WebDesign() {
  const [active, setActive] = useState<"examples" | "articles">("examples");
  const { cari, toggleCari } = useWebDesignArticle();
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <header className="z-50 h-20 sticky top-0 mb-2 flex items-center bg-gray-50 dark:bg-gray-900 text-sm sm:text-base">
        <div className="flex justify-between items-center mx-3 sm:mx-12 lg:mx-32 rounded-2xl shadow-md bg-white dark:bg-gray-950 h-16 w-full px-2 sm:px-8">
          <h1 className="font-semibold min-w-max">
            <div className="text-base sm:text-xl tracking-tight">Web Design</div>
            <div className="text-sm font-normal">{active === "examples" ? "Examples" : "Articles"}</div>
          </h1>
          {active === "articles" && <WebDesignSearchArticle />}

          <nav className="flex gap-1 sm:gap-2">
            <button
              onClick={() => setActive("examples")}
              type="button"
              className="rounded-full bg-green-500 text-white p-1 sm:p-2 px-3 sm:px-4 hover:opacity-70"
            >
              Exampless
            </button>
            <button
              onClick={() => setActive("articles")}
              type="button"
              className="rounded-full bg-blue-500 text-white p-1 sm:p-2 px-3 sm:px-4 hover:opacity-70"
            >
              Articles
            </button>
          </nav>
          {active === "articles" && <WebDesignSearchArticleBtn />}
        </div>
      </header>
      <main
        onClick={() => {
          if (cari) toggleCari();
        }}
        className="px-3 sm:px-12 lg:px-32"
      >
        {active === "articles" ? <WebDesignAarticles /> : <WebDesignCards />}
      </main>
    </section>
  );
}

export function WebDesignAarticles() {
  const { keyCari } = useWebDesignArticle();

  let articles;
  articles = webDesignArticles;

  if (keyCari.length > 0 || keyCari !== "") {
    articles = articles.filter(
      (article) =>
        article.subTitle.some((sub) => sub.title.toLowerCase().includes(keyCari.toLowerCase())) ||
        article.title.toLowerCase().includes(keyCari.toLowerCase())
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 p-6 px-3 sm:p-12 mb-28 sm:px-16 min-h-screen shadow rounded-t-2xl">
      <h2 className="text-3xl font-semibold">Web Design Articles</h2>
      {articles.map((item, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-medium mt-6 mb-3">{item.title}</h3>
          {item.paragraph.map((pItem, pIndex) => (
            <p key={pIndex} className="text-sm leading-relaxed mt-2 mb-1">
              {pItem}
            </p>
          ))}
          {item.subTitle.map((subItem, subIndex) => (
            <div key={subIndex}>
              <h4 className="text-xl font-medium mb-2 mt-4">{subItem.title}</h4>
              {subItem.paragraph.map((pSubItem, pSubIndex) => (
                <p key={pSubIndex} className="mt-2 mb-1 text-sm">
                  {pSubItem}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function WebDesignCards() {
  return (
    <div>
      <BoxCard menu={webDesignMenu} />
    </div>
  );
}

export function WebDesignSearchArticleBtn() {
  const { cari, toggleCari } = useWebDesignArticle();
  return (
    <button
      type="button"
      aria-label="toggle button"
      onClick={toggleCari}
      className="block sm:hidden p-2 sm:p-3 bg-blue-500 text-white rounded-full hover:opacity-70"
    >
      {cari ? <FaXmark /> : <FaMagnifyingGlass />}
    </button>
  );
}

export function WebDesignSearchArticle() {
  const { cari, keyCari, setKeyCari } = useWebDesignArticle();
  return (
    <div
      className={`${
        cari ? "scale-y-100" : "scale-y-0"
      } origin-top sm:scale-y-100 fixed sm:static top-20 bg-white dark:bg-gray-800 left-3 right-3 rounded-full sm:border-none p-2 shadow sm:shadow-none transition-all overflow-hidden`}
    >
      <input
        value={keyCari}
        type="search"
        placeholder="Search here.."
        onFocus={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onChange={(e) => setKeyCari(e.target.value)}
        className="sm:border p-2 bg-inherit rounded-full placeholder:text-blue-300 pl-4 focus:outline-blue-300 w-full"
      />
    </div>
  );
}
