import Movie from "@/interfaces/Movie";

const getOneMovie = async (id: string): Promise<Movie | Error> => {
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

export default getOneMovie;
