import { Movie } from "@/types";
import { fetchCarousel } from "@/hooks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

interface MovieState {
  carousel: Movie[];
  popular: Movie[];
}

const initialState: MovieState = {
  carousel: [],
  popular: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesCarousel: (state, action: PayloadAction<Movie[]>) => {
      state.carousel = action.payload;
    },
  },
});

export const getCarouselMovies = (): AppThunk => async (dispatch) => {
  try {
    const prueba = await fetchCarousel();
    dispatch(getMoviesCarousel(prueba!));
  } catch (error) {
    console.log(error);
  }
};

export const { getMoviesCarousel } = movieSlice.actions;
export default movieSlice.reducer;
