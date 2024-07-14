import { AnimeResponse } from "./animeType";

export default async function fetchAnim(resource: string, query: string) {
  const resAnime = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_ANIME}/${resource}?${query}`);
  const result: AnimeResponse = await resAnime.json();

  return result;
}
