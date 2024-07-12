"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchAnime() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.length > 0) {
      router.push(`/fullstack/anime/search/${keyword}`);
    } else router.push(`/fullstack/anime`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex border border-jikan-accent-1 rounded-full overflow-hidden">
      <input
        type="search"
        className="ml-2 p-2 bg-inherit focus:outline-none text-white w-full"
        placeholder="Search here"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 w-10 rounded-full border-l flex items-center justify-center"
        aria-label="button"
      >
        <FaMagnifyingGlass className="text-jikan-accent-1" />
      </button>
    </form>
  );
}
