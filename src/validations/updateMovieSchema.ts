import { z } from "zod";

export const updateMovieSchema = z.object({
  film_name: z.optional(
    z.string().min(1, { message: "Film name is required" })
  ),
  image: z.optional(
    z.string().url({ message: "Image must be a valid URL" }).optional()
  ),
  genre: z.optional(z.string().min(1, "Genre is required").optional()),
  release_year: z.optional(
    z
      .preprocess(
        (val) => (val === undefined ? undefined : Number(val)),
        z
          .number()
          .int()
          .min(1900, { message: "Release year must be at least 1900" })
          .max(new Date().getFullYear(), {
            message: `Release year cannot be in the future`,
          })
      )
      .optional()
  ),
});

export type UpdateMovieSchema = z.infer<typeof updateMovieSchema>;
