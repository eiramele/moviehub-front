import { NavBar, SearchBar } from "@/components";
import { get } from "http";
import Image from "next/image";
import Link from "next/link";

export interface Movie {
  id: number;
  film_name: string;
  image: string;
  release_year: number;
  createAt: Date;
  updateAt: Date;
  userId: number;
  genre: Genre[];
}

export interface Genre {
  movieId: number;
  genreId: number;
}

function isMovie(obj: any): obj is Movie {
  return (
    "id" in obj &&
    "film_name" in obj &&
    "image" in obj &&
    "release_year" in obj &&
    "createAt" in obj &&
    "updateAt" in obj &&
    "userId" in obj &&
    "genre" in obj
  );
}

function isMovieArray(data: any): data is Movie[] {
  return Array.isArray(data) && data.every(isMovie);
}

const getMovies = async (): Promise<Movie[] | Error> => {
  try {
    const baseUrl = process.env.BASE_URL ?? "";
    if (!baseUrl) {
      throw new Error("BASE_URL is not defined");
    }

    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonResponse = await response.json();
    if (Array.isArray(jsonResponse.data)) {
      return jsonResponse.data as Movie[];
    }
    throw new Error("Data is not an array of Movies");
  } catch (error) {
    console.error("Error fetching data: ", error);
    return new Error("Error fetching movies");
  }
};

export default async function MoviesPage() {
  const movies = await getMovies();

  if (movies instanceof Error) {
    console.error(movies.message);
    return <div>Error loading movies.</div>;
  }

  return (
    <>
      <NavBar />
      <SearchBar />
      <div className="flex flex-wrap justify-center gap-16 mb-8 m-4">
        {movies.map((movie) => (
          <MovieDetail key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

interface Props {
  movie: Movie;
}

function MovieDetail({ movie }: Props) {
  const { id, film_name, image, release_year } = movie;
  return (
    <div className=" w-32 h-40">
      <Image
        width={20}
        height={24}
        alt={film_name}
        src={image}
        layout="responsive"
        priority={false} //para cargarse bajo demanda
        className="shadow-lg shadow-cadet-blue-800/80"
      />
      <Link href={`movies/${id}`}>{film_name}</Link>
    </div>
  );
}
