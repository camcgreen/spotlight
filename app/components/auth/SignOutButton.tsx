'use client'
import { signOut } from 'next-auth/react'

export default function SignOutButton({ alt = false }: { alt?: boolean }) {
  return (
    <button
      className={
        alt
          ? 'text-xs md:text-sm lg:text-base p-2 lg:px-4 lg:py-2 flex justify-center items-center rounded-lg border border-black hover:bg-black hover:text-white transition-colors'
          : 'text-xs md:text-sm lg:text-base p-2 lg:px-4 lg:py-2 flex justify-center items-center rounded-lg bg-black hover:bg-gray-900 transition-colors text-white'
      }
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
    >
      Sign out
    </button>
  )
}
