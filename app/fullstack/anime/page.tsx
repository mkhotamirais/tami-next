import React from "react";
import AnimeList, { AnimeListTitle } from "./AnimeList";
import { AnimeResponse } from "./animeType";

export default async function PageAnime() {
  const resAnime = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_ANIME}/top/anime?limit=8`);
  const topAnime: AnimeResponse = await resAnime.json();

  const resManga = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_ANIME}/top/manga?limit=8`);
  const topManga: AnimeResponse = await resManga.json();

  const resPeople = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_ANIME}/top/people?limit=8`);
  const topPeople: AnimeResponse = await resPeople.json();

  return (
    <>
      <section className="bg-jikan-neutral-2 py-4">
        <AnimeListTitle title="Top Anime" titleHref="/fullstack/anime/top-anime" />
        <AnimeList data={topAnime} />
      </section>
      <section className="bg-jikan-neutral-1 py-4">
        <AnimeListTitle title="Top Manga" titleHref="/fullstack/anime/top-anime" />
        <AnimeList data={topManga} />
      </section>
      <section className="bg-jikan-neutral-2 py-4">
        <AnimeListTitle title="Top People" titleHref="/fullstack/anime/top-anime" />
        <AnimeList data={topPeople} />
      </section>
    </>
  );
}
