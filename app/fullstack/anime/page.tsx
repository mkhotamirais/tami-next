import React from "react";
import AnimeList, { AnimeListTitle } from "./AnimeList";
import fetchAnim from "./fetchAnim";

export default async function PageAnime() {
  const topAnime = await fetchAnim("top/anime", "limit=8");
  const topManga = await fetchAnim("top/manga", "limit=8");
  const topPeople = await fetchAnim("top/people", "limit=8");

  return (
    <>
      <section className="py-4">
        <AnimeListTitle title="Top Anime" titleHref="/fullstack/anime/top-anime" />
        <AnimeList data={topAnime} />
      </section>
      <section className="py-4">
        <AnimeListTitle title="Top Manga" titleHref="/fullstack/anime/top-anime" />
        <AnimeList data={topManga} />
      </section>
      <section className="py-4">
        <AnimeListTitle title="Top People" titleHref="/fullstack/anime/top-anime" />
        <AnimeList data={topPeople} />
      </section>
    </>
  );
}
