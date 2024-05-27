export async function deleteMovie(id: string): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Can not delete movie");
    }

    const result = await response.json();
    console.log("Success:", result);
    alert("Film data deleted successfully");
  } catch (error) {
    console.error("Error:", error);
    alert(`Error: ${error}`);
  }
}
