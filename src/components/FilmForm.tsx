// components/FilmForm.tsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "@/validations/formSchema";

const FilmForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
    if (!baseUrl) {
      throw new Error("BASE_URL is not defined");
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
        throw new Error("Error 1");
      }
      const result = await response.json();
      console.log("Success:", result);
      alert("Film data submitted successfully");
    } catch (error) {
      console.error("Error:", error);
      alert(`Error 2: ${error}`);
    }
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

      {/* <div>
        <label>Genre:</label>
        <select {...register('genre')}>
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        {errors.genre && <p>{errors.genre.message}</p>}
      </div> */}

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
        className=" border border-cadet-blue-900 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default FilmForm;
