import "./MovieDetail.scss";
import { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import { averagePercentage } from "@/utils/movie";
import { API_IMAGE, API_IMAGE_POSTER_DETAIL } from "@/consts";
import { getDetail } from "@/redux/slices/movieSlice";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { movieDetail } = useAppSelector((state) => state.movies);

  console.log(movieDetail);
  useEffect(() => {
    dispatch(getDetail(+id!));
  }, []);

  return (
    <>
      <Navbar fixed={true} active={true} />
      <div className="Detail">
        <img
          className="Detail-background"
          src={`${API_IMAGE}${movieDetail.backdrop_path}`}
          alt={`${movieDetail.title}`}
        />
        <img
          className="Detail-img"
          src={`${API_IMAGE_POSTER_DETAIL}${movieDetail.poster_path}`}
          alt={`${movieDetail.title}`}
        />
        <section className="Detail-content">
          <div className="Detail-content-title">
            <h1>
              {movieDetail.title} ({movieDetail.release_date?.split("-")[0]})
            </h1>
            <div>
              {movieDetail.genres?.map((genre, index, genres) => {
                return (
                  <p key={index}>
                    {index === genres.length - 1
                      ? `${genre.name}.`
                      : `${genre.name},`}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="Detail-actions">
            <div className="Detail-actions-percentage">
              <h4>{averagePercentage(movieDetail.vote_average!)}</h4>
            </div>
            <div className="Detail-buttons">
              <button className="Detail-buttons-button">
                <AiFillHeart size={20} color="white" />
              </button>
              <button className="Detail-buttons-button">
                <FaBookmark size={20} color="white" />
              </button>
              <button className="Detail-buttons-button">
                <AiFillStar size={20} color="white" />
              </button>
            </div>
          </div>
          <div className="Detail-info">
            <h1>Resumen</h1>
            <p>{movieDetail.overview}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieDetail;
