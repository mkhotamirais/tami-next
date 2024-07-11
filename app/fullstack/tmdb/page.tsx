// import { useTmdb } from "@/store/fullstack/useTmdb";
import Image from "next/image";
import Link from "next/link";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export default async function TmdbApp({ searchParams }: { searchParams: { genre: string } }) {
  // const { cari } = useTmdb();
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"}?api_key=${
      process.env.TMDB_API_KEY
    }&language=en-US&page=1`,
    { next: { revalidate: 50 } }
  );

  // jika ingin melihat animasi loading
  // const res: Response = await new Promise((resolve) => {
  //   setTimeout(async () => {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3${
  //         genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
  //       }?api_key=${apiKey}&languate=en-US&page=1`,
  //       { next: { revalidate: 50 } }
  //     );
  //     resolve(response);
  //   }, 2000);
  // });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results: Movie[] = data.results;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {results.map((item, index) => (
        <MovieCard key={index} item={item} />
      ))}
    </div>
  );
}

export function MovieCard({ item }: { item: Movie }) {
  return (
    <div>
      <Link href={`/fullstack/tmdb/${item.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${item?.backdrop_path || item?.poster_path}`}
          alt={item?.title}
          width={200}
          height={200}
          className="sm:rounded-t-lg w-full h-full object-cover object-center"
        />
      </Link>
    </div>
  );
}
