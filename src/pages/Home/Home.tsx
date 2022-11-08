import { useGetMovies } from "@/hooks";
import { useAppSelector } from "@/hooks/redux";
import Carousel from "@/components/Carousel/Carousel";

const Home = () => {
  /* const { movies } = useAppSelector((state) => state.movies); */
  useGetMovies([]);

  return (
    <>
      <Carousel />
    </>
  );
};

export default Home;
