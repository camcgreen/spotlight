'use client'
import Link from 'next/link'

const SceneNotFound = () => {
  return (
    <p className='text-center'>
      Scene not found. Go back{' '}
      <Link href='/'>
        <span className='underline text-blue-700'>home</span>
      </Link>
      .
    </p>
  )
}

export default SceneNotFound
