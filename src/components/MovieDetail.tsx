import Movie from "@/interfaces/Movie";
import Image from "next/image";
import Link from "next/link";

interface Props {
  movie: Movie;
}

export function MovieDetail({ movie }: Props) {
  const { id, film_name, image } = movie;
  return (
    <div className=" w-44 h-64 text-center">
      <Link href={`movies/${id}`}>
        <div className="w-44 h-60 overflow-hidden shadow-lg shadow-cadet-blue-800/80 hover:-translate-y-1 hover:scale-110 hover: duration-300">
          <Image
            width={32}
            height={42}
            alt={film_name}
            src={image}
            layout="responsive"
            priority={false}
            
            objectFit="cover"
          />
        </div>
        <p className="mt-3">{film_name}</p>
        
      </Link>
    </div>
  );
}
