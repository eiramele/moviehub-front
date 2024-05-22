import Link from 'next/link'
import React from 'react'

export function LogoutButton() {
    
  return (
    <Link href={"../api/auth/logout"}>Log out</Link>
  )
}
