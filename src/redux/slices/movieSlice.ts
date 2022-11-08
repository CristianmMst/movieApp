import { Movie } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: Movie[] = [];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesCarousel: (state, action: PayloadAction<Movie[]>) => {
      return (state = action.payload);
    },
  },
});

export const { getMoviesCarousel } = movieSlice.actions;
export default movieSlice.reducer;
