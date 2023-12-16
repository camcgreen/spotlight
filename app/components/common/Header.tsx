'use client'
import Link from 'next/link'
import SignOutButton from '@/app/components/auth/SignOutButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className='h-24 flex justify-between items-center p-4 lg:p-8'>
      <Link href='/'>
        <img
          src='/images/logo.svg'
          className='w-6 md:w-8 cursor-pointer hover:opacity-80 transition-opacity'
          alt='Spotlight logo'
        />
      </Link>
      {pathname !== '/auth' && <SignOutButton alt={true} />}
    </header>
  )
}

export default Header
