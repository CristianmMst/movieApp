import { AppThunk } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail, fetchPopularMovies } from "@/services/movies";
import { CarouselMovie, MovieDetail, SliderMovie } from "@/types";

interface MovieState {
  popular: SliderMovie[];
  nowPlaying: SliderMovie[];
  carousel: CarouselMovie[];
  movieDetail: MovieDetail;
}

const initialState: MovieState = {
  popular: [],
  carousel: [],
  nowPlaying: [],
  movieDetail: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    getMoviesCarousel: (state, action) => {
      state.carousel = action.payload;
    },
    getMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});

export const getPopularMovies = (): AppThunk => async (dispatch) => {
  try {
    const popular = await fetchPopularMovies();
    dispatch(setPopular(popular));
  } catch (error) {
    console.log(error);
  }
};

export const getDetail =
  (id: number): AppThunk =>
    async (dispatch) => {
      try {
        const movie = await fetchMovieDetail(id);
        dispatch(getMovieDetail(movie));
      } catch (error) {
        console.log(error);
      }
    };

export const { getMoviesCarousel, getMovieDetail, setPopular, setNowPlaying } =
  movieSlice.actions;
export default movieSlice.reducer;
