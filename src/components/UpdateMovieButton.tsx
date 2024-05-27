"use client";

import Link from "next/link";
import React from "react";

interface Props {
  id: string;
}

export const UpdateMovieButton: React.FC<Props> = ({ id }) => {
  return (
    <Link href={`/update-movie/${id}`}>
      <button
        type="submit"
        className="border border-cadet-blue-900 rounded-md hover:bg-cadet-blue-900 px-2"
      >
        Update
      </button>
    </Link>
  );
};
