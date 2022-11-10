import { Movie } from "@/types";
import { API_IMAGE } from "@/consts";
import { useEffect, useState } from "react";
import "../../styles/Carousel/Carousel.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  movies: Movie[];
}

const Carousel = ({ movies }: CarouselProps) => {
  if (!movies || movies.length === 0) return <div>Error</div>;

  const [loaded, setLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(movies[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, movies);
    }, 5000);

    return () => clearInterval(interval);
  });

  const averagePercentage = (average: number): string => {
    return (
      Math.round(
        Number(
          average?.toString()?.replace(".", "").slice(0, 2) +
            "." +
            average?.toString()?.replace(".", "")?.slice(3)
        )
      ) + "%"
    );
  };

  const toHoursAndMinutes = (totalMinutes: number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}h ${minutes}m`;
  };

  const changeImage = (index: number) => {
    setSelectedImage(movies[index]);
    setSelectedIndex(index);
  };

  const selectNewImage = (index: number, movies: Movie[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? index < movies.length - 1 : index > 0;
      const nextIndex = next
        ? condition
          ? index + 1
          : 0
        : condition
        ? index - 1
        : movies.length - 1;

      setSelectedImage(movies[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const prev = () => {
    selectNewImage(selectedIndex, movies!, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, movies!);
  };

  return (
    <div className="Carousel">
      <img
        src={`${API_IMAGE}${selectedImage?.image}`}
        className={loaded ? "active" : ""}
        onLoad={() => setLoaded(true)}
        alt={selectedImage?.title}
      />
      <section className="Carousel-content">
        <h3>{selectedImage?.title}</h3>
        <span className="Carousel-content--span">
          {toHoursAndMinutes(selectedImage?.runtime)}
        </span>
        <span className="Carousel-content--span">
          {selectedImage?.release.split("-")[0]}
        </span>
        <span className="Carousel-content--average">
          {averagePercentage(selectedImage?.average)}
        </span>
        <p>{selectedImage?.description}</p>
      </section>
      <button className="Carousel-button--prev" onClick={prev} type={"button"}>
        <IoIosArrowBack size={50} />
      </button>
      <button className="Carousel-button--next" onClick={next} type={"button"}>
        <IoIosArrowForward size={50} />
      </button>
      <div className="Carousel-dots">
        {movies.map((movie, index) => {
          if (index === selectedIndex) {
            return (
              <button
                key={movie.id}
                className="Carousel-dot active"
                onClick={() => changeImage(index)}
              ></button>
            );
          }
          return (
            <button
              key={movie.id}
              className="Carousel-dot"
              onClick={() => changeImage(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
