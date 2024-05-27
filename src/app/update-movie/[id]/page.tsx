import React from "react";
import { Metadata } from "next";
import { UpdateMovieForm } from "@/components";

export const metadata: Metadata = {
  title: "Movie Hub - Update movie",
  description: "Find and store your favourite movies",
};

export default function UpdateMoviePage() {
  return <UpdateMovieForm />;
}
