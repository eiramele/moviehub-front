import React from "react";
import { AddMovie } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Hub - Add movie",
  description: "Find and store your favourite movies",
};

export default function movieForm() {
  return (
    <div>
      <AddMovie />
    </div>
  );
}
