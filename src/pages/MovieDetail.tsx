import { useAppSelector } from "@/hooks/redux";

const MovieDetail = () => {
  const { movieDetail } = useAppSelector((state) => state.movies);
  return <div>{movieDetail.title}</div>;
};

export default MovieDetail;
