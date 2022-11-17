import { useEffect } from "react";
import Carousel from "@/components/Carousel/Carousel";
import { getCarouselMovies } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const Home = () => {
  const { carousel } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarouselMovies());
  }, [dispatch]);

  return (
    <>
      <Carousel carousel={carousel} />
    </>
  );
};

export default Home;
