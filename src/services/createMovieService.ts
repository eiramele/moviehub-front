import { AddMovieSchema } from "@/validations/addMovieSchema";

export async function createMovie(data: AddMovieSchema): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  if (!baseUrl) {
    throw new Error("URL is not defined");
  }
  try {
    const response = await fetch(`${baseUrl}/5`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error: can not fetch data");
    }
    await response.json();
    alert("Film data submitted successfully");
  } catch (error) {
    console.error("Error:", error);
    alert(`Error: ${error}`);
  }
}
