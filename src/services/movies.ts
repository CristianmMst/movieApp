import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "@/utils";
import { Fetch, MovieDetail, MovieFetch, SliderMovie } from "@/types";

export const fetchPopularMovies = async () => {
  const {
    data: { results },
  } = await axiosInstance("/movie/popular");
  return results;
};

export const fetchCarousel = async () => {
  try {
    const {
      data: { results },
    }: AxiosResponse<Fetch> = await axiosInstance.get("/movie/now_playing");

    const moviesDatil = results.slice(0, 5).map(async (movie) => {
      const response = await axiosInstance.get(`/movie/${movie.id}`);
      return response.data;
    });

    return Promise.all(moviesDatil).then((response) =>
      response.map((movie: MovieFetch) => {
        return {
          id: movie.id,
          title: movie.title,
          runtime: movie.runtime,
          average: movie.vote_average,
          image: movie.backdrop_path,
          release: movie.release_date,
          description: movie.overview,
        };
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopular = async () => {
  try {
    const {
      data: { results: popular },
    }: AxiosResponse<Fetch> = await axiosInstance.get("/movie/popular");

    const popularDetail: SliderMovie[] = popular.slice(0, 10).map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        image: movie.poster_path,
        description: movie.overview,
      };
    });
    return popularDetail;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNowPlaying = async () => {
  try {
    const {
      data: { results: nowPlaying },
    }: AxiosResponse<Fetch> = await axiosInstance.get("/movie/now_playing");

    const nowPlayingDetail: SliderMovie[] = nowPlaying
      .slice(0, 10)
      .map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          image: movie.poster_path,
          description: movie.overview,
        };
      });
    return nowPlayingDetail;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetail = async (id: number) => {
  try {
    const { data }: AxiosResponse<MovieDetail> = await axiosInstance.get(
      `/movie/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
