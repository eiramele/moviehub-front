import { UpdateMovieSchema } from "@/validations/updateMovieSchema";

export async function updateMovie(
  data: UpdateMovieSchema,
  id: string
): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  if (!baseUrl) {
    throw new Error("URL is not defined");
  }
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error: can not fetch data");
    }
    await response.json();
    alert("Film data updated successfully");
  } catch (error) {
    console.error("Error:", error);
    alert(`Error: ${error}`);
  }
}
