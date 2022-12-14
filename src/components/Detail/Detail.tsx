import "./Detail.scss";
import { MovieDetail } from "@/types";
import { FaBookmark } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { API_IMAGE, API_IMAGE_POSTER_DETAIL } from "@/consts";
import { averagePercentage, toHoursAndMinutes } from "@/utils/movie";

export const Detail = ({ movie }: { movie: MovieDetail }) => {
  return (
    <div className="Detail">
      <img
        className="Detail-background"
        src={`${API_IMAGE}${movie?.backdrop_path}`}
        alt={`${movie?.title}`}
      />
      <img
        className="Detail-img"
        src={`${API_IMAGE_POSTER_DETAIL}${movie?.poster_path}`}
        alt={`${movie?.title}`}
      />
      <section className="Detail-content">
        <div className="Detail-content-title">
          <h1>
            {movie?.title} ({movie?.release_date?.split("-")[0]})
          </h1>
          <div>
            {movie?.genres?.map((genre, index, genres) => {
              return (
                <p key={index}>
                  {index === genres.length - 1
                    ? `${genre.name}.`
                    : `${genre.name},`}
                </p>
              );
            })}
            <span>{toHoursAndMinutes(movie.runtime)}</span>
          </div>
        </div>
        <div className="Detail-actions">
          <div className="Detail-actions-percentage">
            <h4>{averagePercentage(movie?.vote_average!)}</h4>
            <span>Puntuación</span>
          </div>
          <div className="Detail-buttons">
            <button className="Detail-buttons-button">
              <AiFillHeart size={20} color="white" />
              <span className="Detail-buttons-tooltip">Like</span>
            </button>
            <button className="Detail-buttons-button">
              <FaBookmark size={20} color="white" />
              <span className="Detail-buttons-tooltip">Add Favorite</span>
            </button>
          </div>
        </div>
        <div className="Detail-info">
          <h1>Resumen</h1>
          <p>{movie?.overview}</p>
        </div>
      </section>
    </div>
  );
};

export default Detail;
