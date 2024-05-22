
import Link from 'next/link'
import React from 'react'

export function LoginButton() {
    
  return (
    <Link href={"../api/auth/login"}>Log in</Link>
  )
}
