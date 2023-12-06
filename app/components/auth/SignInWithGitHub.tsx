'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SignInWithGitHub() {
  const [loading, setLoading] = useState(false)
  return (
    <Button
      onClick={() => {
        setLoading(true)
        signIn('github', {
          callbackUrl: `${window.location.origin}`,
        })
      }}
    >
      Log in with GitHub
      {loading ? (
        <img
          src='/images/puff.svg'
          alt='Loading spinner'
          className='w-4 h-4 ml-4'
        />
      ) : (
        <Github className='w-4 h-4 ml-4' />
      )}
    </Button>
  )
}
