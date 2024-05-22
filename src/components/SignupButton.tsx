import Link from "next/link";
import React from "react";

export function SignUpButton() {
  return <Link href={"../api/auth/signup"}>Sign up</Link>;
}
