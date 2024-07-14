import Link from "next/link";
import { AnimeResponse } from "./animeType";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export default function AnimeList({ data }: { data: AnimeResponse }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 px-3 gap-1">
      {data.data.length > 0 ? (
        data.data?.map((item) => (
          <Link
            key={item.mal_id}
            href={`/fullstack/anime/${item.mal_id}`}
            className="relative border h-72 bg-gray-500 rounded"
          >
            <div className="absolute min-h-16 w-full p-3 leading-5 z-20 bottom-0 bg-black/50 text-white flex items-center justify-center text-center">
              {item.title || item.name}
            </div>
            <Image
              src={item.images.jpg.image_url}
              alt="..."
              width={300}
              height={300}
              className="z-10 w-full h-full absolute object-cover object-center"
              priority
            />
          </Link>
        ))
      ) : (
        <div className="text-jikan-accent-1 text-2xl my-4">no result</div>
      )}
    </div>
  );
}

export function AnimeListTitle({ title, titleHref = "" }: { title: string; titleHref?: string }) {
  return (
    <div className="px-3 flex items-center justify-between py-4">
      <h2 className="font-montserrat text-jikan-accent-1 font-semibold text-2xl">{title}</h2>
      {titleHref && (
        <Link href={titleHref} className="text-jikan-accent-1 flex items-center gap-1 hover:opacity-70">
          See all
          <FaArrowCircleRight />
        </Link>
      )}
    </div>
  );
}
