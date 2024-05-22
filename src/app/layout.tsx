import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Hub",
  description: "Find and store your favourite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="m-0 min-w-[320px] min-h-screen ">
          <header>
            <Image
              src="/assets/movie-hub-logo.png"
              alt="Movie-hub logo"
              width={100}
              height={100}
            />
          </header>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
