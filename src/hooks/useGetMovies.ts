import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { axiosInstance } from "@/utils";
import { useAppDispatch } from "./redux";
import { Fetch, MovieFetch } from "@/types";
import { getMoviesCarousel } from "@/redux/slices/movieSlice";

export const useGetMovies = (dependencies: any[]): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results },
        }: AxiosResponse<Fetch> = await axiosInstance.get("/movie/now_playing");

        const moviesDatil = results.slice(0, 5).map(async (movie) => {
          return await axiosInstance
            .get(`/movie/${movie.id}`)
            .then((response) => response.data);
        });

        Promise.all(moviesDatil).then((response) =>
          dispatch(
            getMoviesCarousel(
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
            )
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, dependencies);
};
