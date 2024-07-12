import AnimeList, { AnimeListTitle } from "../../AnimeList";
import { AnimeResponse } from "../../animeType";

export default async function SearchKeyword({ params }: { params: { keyword: string } }) {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_ANIME}/anime?q=${keyword}`);
  const searchResult: AnimeResponse = await response.json();
  return (
    <div>
      <AnimeListTitle title={`Result for: ${decodeKeyword}`} />
      {searchResult.data.length > 0 ? (
        <AnimeList data={searchResult} />
      ) : (
        <div className="italic text-2xl text-white px-3">no result</div>
      )}
    </div>
  );
}
