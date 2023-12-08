import Hero from "./Hero";
import Row from "./Row";
import { endpoints } from "../request";
export default function Movies() {
  return (
    <>
      <Hero />
      <Row
        title={"Popular on Netflix"}
        fetchUrl={endpoints.fetchpopular}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={endpoints.fetchtrending} />
      <Row title={"Top Rated"} fetchUrl={endpoints.fetchtopRated} />
      <Row title={"Action Movies"} fetchUrl={endpoints.fetchactionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={endpoints.fetchcomedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={endpoints.fetchhorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={endpoints.fetchromanceMovies} />
      <Row title={"Documentaries"} fetchUrl={endpoints.fetchdocumentaries} />
    </>
  );
}
