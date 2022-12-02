import "swiper/css";
import "./Slider.scss";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { API_IMAGE_POSTER } from "@/consts";
import { FreeMode, Navigation } from "swiper";
import { SliderMovie } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux";

interface PopularMoviesProps {
  title: string;
  movies: SliderMovie[];
}

const NowPlaying = ({ movies, title }: PopularMoviesProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="Popular">
      <h3 className="Popular-title">{title}</h3>
      <Swiper
        freeMode
        navigation
        spaceBetween={25}
        slidesPerView={6}
        modules={[Navigation, FreeMode]}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 6,
          },
        }}
      >
        {movies.map((movie, index: number) => (
          <SwiperSlide key={index}>
            <Link to={`movies/${movie.id}`}>
              <img
                className="Swiper-img"
                src={`${API_IMAGE_POSTER}${movie.image}`}
                alt={movie.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NowPlaying;
