import { SearchBar } from "@/_components";

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <div className="flex flex-wrap justify-center gap-4 m-4">
        <MovieDetail />
        <MovieDetail />
        <MovieDetail />
        <MovieDetail />
        <MovieDetail />
        <MovieDetail />
        <MovieDetail />
        <MovieDetail />
      </div>
    </>
  );
}

function MovieDetail() {
  return <div className="border w-32 h-40"></div>;
}
