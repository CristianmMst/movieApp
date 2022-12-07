import { useEffect } from "react";
import { getMovies } from "@/redux/slices/movieSlice";
import { Slider, Navbar, Carousel } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { carousel, popular, now_playing } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar fixed={true} active={false}/>
      <Carousel carousel={carousel} />
      <Slider movies={popular} title={"Populares"} />
      <Slider movies={now_playing} title={"En emisión"} />
    </>
  );
};
