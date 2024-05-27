import Image from "next/image";

import Movie from "@/interfaces/Movie";
import { DeleteMovie } from "@/components";
import getOneMovie from "@/services/getOneMovieService";
import { UpdateMovieButton } from "@/components/UpdateMovieButton";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const movie: Movie | Error = await getOneMovie(params.id);

  if (movie instanceof Error) {
    return {
      title: "Error loading movie",
      description: "There was an error loading the movie details.",
    };
  }

  const { film_name, image, release_year, genre } = movie as Movie;

  return {
    title: `Movie Hub - ${film_name}`,
    description: `Details and information about ${film_name}.`,

  };
}

export default async function MoviePage({ params }: Props) {
  const movie: Movie | Error = await getOneMovie(params.id);

  if (movie instanceof Error) {
    console.error(movie.message);
    return <div>Error loading movie.</div>;
  }

  const { film_name, image, release_year, genre } = movie as Movie;

  return (
    <div className="shadow-lg shadow-cadet-blue-800/80 w-40 h-56">
      <div className="mb-2">
        <Image
          width={32}
          height={56}
          alt={film_name}
          src={image}
          layout="responsive"
          priority={false}
        />
      </div>

      <div className="text-center">
        <p>{film_name}</p>
        <p>
          {` ${release_year} | ${
            genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase()
          }`}
        </p>
      </div>

      <div className="flex gap-3 justify-center mt-4">
        <UpdateMovieButton id={params.id} />
        <DeleteMovie id={params.id} />
      </div>
    </div>
  );
}
