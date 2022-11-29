import { CarouselMovie, MovieDetail, SliderMovie } from "@/types";
import {
  fetchCarousel,
  fetchMovieDetail,
  fetchNowPlaying,
  fetchPopular,
} from "@/hooks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface MovieState {
  carousel: CarouselMovie[];
  popular: SliderMovie[];
  now_playing: SliderMovie[];
  movieDetail: MovieDetail;
}

const initialState: MovieState = {
  carousel: [],
  popular: [],
  now_playing: [],
  movieDetail: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesCarousel: (state, action: PayloadAction<CarouselMovie[]>) => {
      state.carousel = action.payload;
    },
    getMoviesPopular: (state, action: PayloadAction<SliderMovie[]>) => {
      state.popular = action.payload;
    },
    getMoviesNowPlaying: (state, action: PayloadAction<SliderMovie[]>) => {
      state.now_playing = action.payload;
    },
    getMovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      state.movieDetail = action.payload;
    },
  },
});

export const movieDetail =
  (id: number): AppThunk =>
    async (dispatch) => {
      try {
        const movie = await fetchMovieDetail(id);
        dispatch(getMovieDetail(movie!));
      } catch (error) {
        console.log(error);
      }
    };

export const getMovies = (): AppThunk => async (dispatch) => {
  try {
    const carousel = await fetchCarousel();
    const popular = await fetchPopular();
    const nowPlaying = await fetchNowPlaying();
    dispatch(getMoviesPopular(popular!));
    dispatch(getMoviesCarousel(carousel!));
    dispatch(getMoviesNowPlaying(nowPlaying!));
  } catch (error) {
    console.log(error);
  }
};

export const {
  getMoviesCarousel,
  getMoviesPopular,
  getMoviesNowPlaying,
  getMovieDetail,
} = movieSlice.actions;
export default movieSlice.reducer;
