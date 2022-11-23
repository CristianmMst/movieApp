import { AxiosResponse } from "axios";
import { axiosInstance } from "@/utils";
import { Fetch, MovieFetch } from "@/types";

export const fetchCarousel = async () => {
  try {
    const {
      data: { results },
    }: AxiosResponse<Fetch> = await axiosInstance.get("/movie/now_playing");

    const moviesDatil = results.slice(0, 5).map(async (movie) => {
      const response = await axiosInstance.get(`/movie/${movie.id}`);
      return response.data;
    });

    return await Promise.all(moviesDatil).then((response) =>
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
      data: { results },
    }: AxiosResponse<Fetch> = await axiosInstance.get("/movie/popular");

    const moviesDatil = results.slice(0, 10);
    console.log(moviesDatil);

    return await Promise.all(moviesDatil).then((response) =>
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
