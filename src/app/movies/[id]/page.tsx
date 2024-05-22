import Image from "next/image";
import { Movie } from "../page";

interface Props {
  params: { id: string };
}

const getMovie = async (id: string): Promise<Movie | Error> => {
  try {
    const baseUrl = process.env.BASE_URL ?? "";
    if (!baseUrl) {
      throw new Error("BASE_URL is not defined");
    }
    const response = await fetch(`${baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data as Movie;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return new Error("Error fetching movie");
  }
};

export default async function MoviePage({ params }: Props) {
  const movie: Movie | Error = await getMovie(params.id);

  const { film_name, image, release_year } = movie as Movie;

  if (movie instanceof Error) {
    console.error(movie.message);
    return <div>Error loading movies.</div>;
  }

  return (
    <div className="shadow-lg shadow-cadet-blue-800/80 w-40 h-60">
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
      {film_name}
      <span>{` (${release_year})`}</span>
    </div>
  );
}
