import { z } from "zod";

export const formSchema = z.object({
  film_name: z.string().min(1, { message: "Film name is required" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
  //   genre: z.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'], { message: 'Select a valid genre' }),
  release_year: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .int()
      .min(1900, { message: "Release year must be at least 1900" })
      .max(new Date().getFullYear(), {
        message: `Release year cannot be in the future`,
      })
  ),
});

export type FormSchema = z.infer<typeof formSchema>;
