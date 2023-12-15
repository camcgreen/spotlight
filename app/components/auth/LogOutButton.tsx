'use client'
import { signOut } from 'next-auth/react'

export default function LogOutButton() {
  return (
    <button
      className='bg-black hover:bg-gray-900 transition-colors text-white py-4 px-8 flex justify-center items-center rounded-lg mb-16 lg:mb-0'
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
    >
      Sign out
    </button>
  )
}
