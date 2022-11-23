import { CarouselMovie, PopularMovie } from "@/types";
import { fetchCarousel, fetchPopular } from "@/hooks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface MovieState {
  carousel: CarouselMovie[];
  popular: PopularMovie[];
}

const initialState: MovieState = {
  carousel: [],
  popular: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesCarousel: (state, action: PayloadAction<CarouselMovie[]>) => {
      state.carousel = action.payload;
    },
    getMoviesPopular: (state, action: PayloadAction<PopularMovie[]>) => {
      state.popular = action.payload;
    },
  },
});

export const getMovies = (): AppThunk => async (dispatch) => {
  try {
    const carousel = await fetchCarousel();
    const popular = await fetchPopular();
    dispatch(getMoviesPopular(popular!));
    dispatch(getMoviesCarousel(carousel!));
  } catch (error) {
    console.log(error);
  }
};

export const { getMoviesCarousel, getMoviesPopular } = movieSlice.actions;
export default movieSlice.reducer;
