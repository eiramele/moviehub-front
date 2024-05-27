"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddMovieSchema, addMovieSchema } from "@/validations/addMovieSchema";
import { createMovie } from "@/services/createMovieService";

export const AddMovie: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMovieSchema>({
    resolver: zodResolver(addMovieSchema),
  });

  const onSubmit = async (data: AddMovieSchema) => {
    createMovie(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-40"
    >
      <div>
        <label>Film Name:</label>
        <input type="text" {...register("film_name")} />
        {errors.film_name && <p>{errors.film_name.message}</p>}
      </div>

      <div>
        <label>Image URL:</label>
        <input type="text" {...register("image")} />
        {errors.image && <p>{errors.image.message}</p>}
      </div>

      <div>
        <label>Genre:</label>
        <select {...register("genre")}>
          <option value="">Select a genre</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Musical">Musical</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        {errors.genre && <p>{errors.genre.message}</p>}
      </div>

      <div>
        <label>Release Year:</label>
        <input
          type="number"
          {...register("release_year", { valueAsNumber: true })}
        />
        {errors.release_year && <p>{errors.release_year.message}</p>}
      </div>

      <button
        type="submit"
        className=" border border-cadet-blue-900 rounded-md hover:bg-cadet-blue-900"
      >
        Submit
      </button>
    </form>
  );
};
