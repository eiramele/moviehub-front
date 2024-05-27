import { MovieDetail, NavBar } from "@/components";
import Movie from "../../interfaces/Movie";
import getMovies from "@/services/getMoviesService";


export default async function MoviesPage() {
  const movies = await getMovies();

  if (movies instanceof Error) {
    console.error(movies.message);
    return <div>Error loading movies.</div>;
  }

  return (
    <>
      <NavBar />

      <div className="flex flex-wrap justify-center gap-16 mb-8 m-4">
        {movies.map((movie) => (
          <MovieDetail key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

