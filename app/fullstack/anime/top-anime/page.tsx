"use client";

import { useEffect, useState } from "react";
import AnimeList from "../AnimeList";
import { AnimeResponse } from "../animeType";
import TitleTopJikan from "../Title";
import PaginationJikan from "../Pagination";
import { useJikan } from "@/store/fullstack/useJikan";

export default function AnimePopular() {
  const { page } = useJikan();
  const [topAnime, setTopAnime] = useState<AnimeResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_ANIME}/top/anime?page=${page}`);
      const mostPopular: AnimeResponse = await response.json();
      setTopAnime(mostPopular);
    };
    fetchData();
  }, [page]);

  return (
    <section>
      <TitleTopJikan>Top Anime</TitleTopJikan>
      {topAnime?.pagination.last_visible_page && <PaginationJikan lastPage={topAnime.pagination.last_visible_page} />}
      {topAnime ? <AnimeList data={topAnime} /> : null}
    </section>
  );
}
