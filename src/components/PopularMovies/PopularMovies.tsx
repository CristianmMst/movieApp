import "./PopularMovies.scss";
import { Navigation } from "swiper";
import { PopularMovies } from "@/types";
import { API_IMAGE_POSTER } from "@/consts";
import { Swiper, SwiperSlide } from "swiper/react";

interface PopularMoviesProps {
  popular: PopularMovies[];
}

const Popular = ({ popular }: PopularMoviesProps) => {
  return (
    <div className="Popular">
      <h3 className="Popular-title">Películas Populares</h3>
      <Swiper loop navigation slidesPerView={5} spaceBetween={35} modules={[Navigation]}>
        {popular.map((movie, index) => (
          <SwiperSlide key={index}>
            <img
              className="Swiper-img"
              src={`${API_IMAGE_POSTER}${movie.image}`}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
