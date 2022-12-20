import { useGetMovies } from "@/hooks";
import { useAppSelector } from "@/hooks/redux";
import { Slider, Carousel, Navbar } from "@/components";

export const Home = () => {
  const { carousel } = useAppSelector((state) => state.movies);
  const { popular, topRated } = useAppSelector((state) => state.movies);

  useGetMovies();

  return (
    <>
      <Navbar />
      <Carousel carousel={carousel} />
      <Slider movies={popular.slice(0, 10)} title={"Populares"} />
      <Slider movies={topRated.slice(0, 10)} title={"En emisión"} />
    </>
  );
};

export default Home;
