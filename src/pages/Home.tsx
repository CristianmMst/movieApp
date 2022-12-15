import { useGetMovies } from "@/hooks";
import { useAppSelector } from "@/hooks/redux";
import { Slider, Carousel, Navbar } from "@/components";

export const Home = () => {
  const { carousel } = useAppSelector((state) => state.movies);
  const { popular, nowPlaying } = useAppSelector((state) => state.slider);

  useGetMovies();

  return (
    <>
      <Navbar />
      <Carousel carousel={carousel} />
      <Slider movies={popular} title={"Populares"} />
      <Slider movies={nowPlaying} title={"En emisión"} />
    </>
  );
};

export default Home;
