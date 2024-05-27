"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";
import { SignUpButton, LoginButton, LogoutButton } from "./index";

export const NavBar = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-around px-3 gap-3 mb-5 text-cadet-blue-200 bg-cadet-blue-700 rounded-md">
      {/* <div className="nav-bar__buttons"> */}
      {!user && (
        <>
          <LoginButton />
          <SignUpButton />
        </>
      )}
      {user && (
        <>
        <Link href={'/add-movie'}>Add movie</Link>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

//     </div>
//   );
// };
