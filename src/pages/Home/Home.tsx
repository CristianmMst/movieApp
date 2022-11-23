import { useEffect } from "react";
import Carousel from "@/components/Carousel/Carousel";
import { getCarouselMovies } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import PopularMovies from "@/components/PopularMovies/PopularMovies";

const Home = () => {
  const { carousel } = useAppSelector((state) => state.movies);
  const { popular } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarouselMovies());
  }, [dispatch]);

  return (
    <>
      <Carousel carousel={carousel} />
      <PopularMovies />
    </>
  );
};

export default Home;
