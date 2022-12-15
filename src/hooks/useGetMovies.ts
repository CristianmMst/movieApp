import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { getNowPlaying, getPopular } from "@/redux/slices/sliderSlice";
import { getMovieDetail, getMoviesCarousel } from "@/redux/slices/movieSlice";
import {
  fetchCarousel,
  fetchNowPlaying,
  fetchPopular,
} from "@/services/movies";

export const useGetMovies = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const popular = await fetchPopular();
      const carousel = await fetchCarousel();
      const nowPlaying = await fetchNowPlaying();

      dispatch(getMovieDetail({}));
      dispatch(getPopular(popular!));
      dispatch(getNowPlaying(nowPlaying!));
      dispatch(getMoviesCarousel(carousel!));
    })();
  }, []);
};
