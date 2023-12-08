const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";
export const endpoints = {
  fetchtrending: `${baseUrl}/trending/all/week?api_key=${key}&language=en-US`,
  fetchpopular: `${baseUrl}/movie/popular?api_key=${key}&language=en-US`,
  fetchnetflixOriginals: `${baseUrl}/discover/tv?api_key=${key}&with_networks=213`,
  fetchtopRated: `${baseUrl}/movie/top_rated?api_key=${key}&language=en-US`,
  fetchactionMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=28`,
  fetchcomedyMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=35`,
  fetchhorrorMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=27`,
  fetchromanceMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=10749`,
  fetchdocumentaries: `${baseUrl}/discover/movie?api_key=${key}&with_genres=99`,
};
