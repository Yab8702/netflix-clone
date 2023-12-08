import { useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const rowContainerRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    return () => {
      setMovies([]);
    };
  }, [fetchUrl]);

  useEffect(() => {
    const handleScroll = () => {
      const container = rowContainerRef.current;
      setShowPrevButton(container.scrollLeft > 0);
      setShowNextButton(
        container.scrollLeft < container.scrollWidth - container.offsetWidth
      );
    };

    rowContainerRef.current.addEventListener("scroll", handleScroll);
    // return () => {
    //   rowContainerRef.current.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const handlePrevClick = () => {
    rowContainerRef.current.scrollLeft -= rowContainerRef.current.offsetWidth;
  };

  const handleNextClick = () => {
    rowContainerRef.current.scrollLeft += rowContainerRef.current.offsetWidth;
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div
      className={`flex flex-col space-y-2 p-2 -mt-10
      ${
        isLargeRow &&
        " md:-mt-10 lg:-mt-16 xl:-mt-30 2xl:-mt-36 z-10 relative text-white"
      }`}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div
        id="row-container"
        ref={rowContainerRef}
        className="flex flex-row space-x-2 overflow-x-scroll scrollbar-hide     overflow-y-hidden p-2 md:p-4 -mt-2 md:-mt-4 lg:-mt-2 xl:-mt-4 2xl:-mt-4"
      >
        {showPrevButton && (
          <button
            className={`capitalize border-none py-4 transition duration-200 ease-in-out text-2xl text-white opacity-0 hover:opacity-100 absolute left-0   w-10 bg-transparent rounded-full  z-10 ${
              isLargeRow ? "h-80" : "h-40"
            }`}
            onClick={handlePrevClick}
          >
            <i className="fas fa-chevron-left  w-12 my-auto bg-transparent flex item-center justify-center rounded-full text-3xl"></i>
          </button>
        )}
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`w-28 md:w-44 h-28 md:h-44 object-cover rounded-lg transition duration-200 transform hover:scale-105 cursor-pointer ${
              isLargeRow && "w-52 md:w-80 h-48 md:h-80 hover:scale-110"
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
        {showNextButton && (
          <button
            className={`capitalize border-none py-4  transition duration-200 ease-in-out text-2xl text-white opacity-0 hover:opacity-100 absolute right-0  w-10 bg-transparent rounded-full ${
              isLargeRow ? "h-80" : "h-40"
            }`}
            onClick={handleNextClick}
          >
            <i className="fas fa-chevron-right  w-12 my-auto bg-transparent rounded-full text-3xl"></i>
          </button>
        )}
      </div>
      <div
        className=" 
            w-9/12 md:w-8/12 lg:w-6/12
            mx-auto
            p-8 md:p-8 gap-4 flex flex-col
      "
      >
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={{
              height: "390",
              width: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        )}
      </div>
    </div>
  );
}
