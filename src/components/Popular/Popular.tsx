import "./Popular.scss";
import { FreeMode, Navigation } from "swiper";
import { PopularMovie } from "@/types";
import { API_IMAGE_POSTER } from "@/consts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";

interface PopularMoviesProps {
  popular: PopularMovie[];
}

const Popular = ({ popular }: PopularMoviesProps) => {
  return (
    <div className="Popular">
      <h3 className="Popular-title">Películas Populares</h3>
      <Swiper
        loop
        freeMode
        navigation
        spaceBetween={15}
        slidesPerView={5}
        modules={[
          window.screen.availWidth > 800 ? Navigation : FreeMode,
          FreeMode,
        ]}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
      >
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
