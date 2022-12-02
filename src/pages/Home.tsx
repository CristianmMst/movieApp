import { useEffect } from "react";
import Slider from "@/components/Slider/Slider";
import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Carousel/Carousel";
import { getMovies } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const Home = () => {
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

export default Home;
