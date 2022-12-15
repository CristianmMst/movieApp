import { SliderMovie } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sliderState {
  popular: SliderMovie[];
  nowPlaying: SliderMovie[];
}

const initialState: sliderState = {
  popular: [],
  nowPlaying: [],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    getPopular: (state, action: PayloadAction<SliderMovie[]>) => {
      state.popular = action.payload;
    },
    getNowPlaying: (state, action: PayloadAction<SliderMovie[]>) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { getPopular, getNowPlaying } = sliderSlice.actions;

export default sliderSlice.reducer;
