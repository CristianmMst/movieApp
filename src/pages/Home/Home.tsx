import { useEffect } from "react";
import Carousel from "@/components/Carousel/Carousel";
import { getMovies } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Popular from "@/components/Popular/Popular";

const Home = () => {
  const { carousel } = useAppSelector((state) => state.movies);
  const { popular } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Carousel carousel={carousel} />
      <Popular popular={popular} />
    </>
  );
};

export default Home;
