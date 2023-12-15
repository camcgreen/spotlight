'use client'
import { useState } from 'react'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SignInWithGitHub() {
  const [loading, setLoading] = useState(false)
  return (
    <button
      className='w-full bg-black hover:bg-gray-900 transition-colors text-white p-4 tracking-tight flex justify-center items-center rounded-lg mb-16 lg:mb-0'
      onClick={() => {
        setLoading(true)
        signIn('github', {
          callbackUrl: `${window.location.origin}`,
        })
      }}
    >
      Sign in
      {loading ? (
        <img
          src='/images/puff.svg'
          alt='Loading spinner'
          className='w-4 h-4 ml-2'
        />
      ) : (
        <Github className='w-4 h-4 ml-2' />
      )}
    </button>
  )
}
