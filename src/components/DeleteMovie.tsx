"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/validations/formSchema";

interface Props {
  id: string;
}

const DeleteMovie: React.FC<Props> = ({ id }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>();

  const onSubmit = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
    }

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error 1");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Film data deleted successfully");
    } catch (error) {
      console.error("Error:", error);
      alert(`Error 2: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="submit" className="border border-cadet-blue-900 rounded-md">
        Delete
      </button>
    </form>
  );
};

export default DeleteMovie;
