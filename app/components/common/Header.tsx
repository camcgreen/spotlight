'use client'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-24 flex items-center p-4 lg:p-8'>
      <Link href='/'>
        <img
          src='/images/logo.svg'
          className='w-6 md:w-8 cursor-pointer hover:opacity-80 transition-opacity'
          alt='Spotlight logo'
        />
      </Link>
    </header>
  )
}

export default Header
