import { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "../request";
export default function Hero() {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(endpoints.fetchpopular);
      const movies = response.data.results;
      const randmovies = movies[Math.floor(Math.random() * movies.length)];
      setMovies(randmovies);
      return response;
    }
    fetchdata();
  }, []);
  const { title, backdrop_path, release_date, overview } = movies;
  return (
    <div className="w-full h-screen lg:h-screen">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[550px] bg-gradient-to-r from-black" />
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          className=" w-full h-full object-cover filter brightness-50 "
        />
        <div
          className="
        w-9/12 md:w-8/12 lg:w-6/12
        absolute top-[30%] lg:top-[40%] p-4 md:p-8 gap-4 flex flex-col"
        >
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <p
            className="text-sm md:text-lg mt-4
           w-11/12 md:w-8/12"
          >
            {overview?.length > 150
              ? `${overview.substring(0, 150)}...`
              : overview}
          </p>
          <div className="flex flex-row gap-4 mt-5">
            <button
              className="capitalize border-none py-3 px-12
              bg-white hover:bg-gray-100 transition duration-200 ease-in-out
              text-2xl
              text-black

            "
            >
              <i className="fas fa-play mr-4 text-black text-3xl"></i>
              play
            </button>
            <button
              className="capitalize
             border-none py-3 px-12 
              bg-gray-500 hover:bg-gray-600 transition duration-200 ease-in-out  text-white
              text-2xl
            "
            >
              <i
                className=" 
              fas fa-info-circle mr-2 text-white
              text-3xl
              "
              ></i>
              more info
            </button>
          </div>

          {/* <p className="text-sm md:text-lg mt-4" style={{ color: "#b8b8b8" }}>
            {release_date}
          </p> */}
        </div>
      </div>
    </div>
  );
}
