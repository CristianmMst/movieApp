export interface PopularMovies {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface CarouselMovie {
  id: number;
  title: string;
  image: string;
  release: string;
  average: number;
  runtime: number;
  description: string;
}

export interface MovieFetch {
  id: number;
  title: string;
  runtime: number;
  overview: string;
  vote_average: number;
  release_date: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface Fetch {
  results: MovieFetch[];
}
