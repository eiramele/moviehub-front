# Moviehub - Front-end

## Introduction

MovieHub is a movie database web application built with Next.js 14, using Tailwind CSS for styling and Auth0 for authentication. It interfaces with a PostgreSQL database to manage a collection of movies. The application allows users to view, add, update, and delete movie entries. It includes robust form management with React Hook Form and Zod for schema validation.

## Features

- View Movies: Users can view a list of all movies stored in the PostgreSQL database.
- Movie Details: Each movie's detailed information such as release year and genre can be accessed.
- Add Movies: Authenticated users can add new movies to the database.
- Update Movies: Authenticated users can update existing movie entries.
- Delete Movies: Authenticated users can remove movies from the database.
- Protected Routes: Certain actions and pages require user authentication to access.

## Tech Stack

- Frontend: Next.js 14, Tailwind CSS
- Authentication: Auth0
- Form Handling: React Hook Form with Zod for validation

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
