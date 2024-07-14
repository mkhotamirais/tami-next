export type Anime = {
  mal_id: number;
  title: string;
  name: string;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  rated: string;
};

export type AnimeResponse = {
  data: Anime[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
};
