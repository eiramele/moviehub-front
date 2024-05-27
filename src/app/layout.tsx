import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

import { Roboto, Days_One } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const days = Days_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
    <html lang="en" className={days.className}>
      <UserProvider>
        <body className="m-0 min-w-[320px] min-h-screen ">
          <header>
            <Link href={"/movies"}>
              <Image
                src="/assets/movie-hub-logo.png"
                alt="Movie-hub logo"
                width={100}
                height={100}
              />
            </Link>
          </header>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
