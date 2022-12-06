import { useEffect } from "react";
import { Navbar } from "@/components";
import { useParams } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import { getDetail } from "@/redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { movieDetail } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getDetail(+id!));
  }, []);

  return (
    <>
      <Navbar fixed={true} active={true} />
      <Detail movie={movieDetail} />
    </>
  );
};

export default MovieDetail;
