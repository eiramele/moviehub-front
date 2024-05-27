"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Hub - Profile",
  description: "Find and store your favourite movies",
};

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h2>Welcome to Movie Hub</h2>
        <p>This is your user email: {user.email}</p>
      </div>
    )
  );
}
