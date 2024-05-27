import Movie from "@/interfaces/Movie";

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

export default getMovies;
