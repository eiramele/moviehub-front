"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { deleteMovie } from "@/services/deleteMovieService";

interface Props {
  id: string;
}

export const DeleteMovie: React.FC<Props> = ({ id }) => {
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    await deleteMovie(id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button
        type="submit"
        className="border border-cadet-blue-900 rounded-md hover:bg-cadet-blue-900 px-2"
      >
        Delete
      </button>
    </form>
  );
};
