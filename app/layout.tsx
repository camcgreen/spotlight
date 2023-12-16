import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/common/Header'
import Footer from '@/app/components/common/Footer'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // return (
  //   <html lang='en' className='h-min tracking-tighter'>
  //     <body className={`${dm_sans.className} bg-light-sky`}>
  //       <div className='flex flex-col justify-between min-h-screen-sm'>
  //         <Header />
  //         {children}
  //         <Footer />
  //       </div>
  //     </body>
  //   </html>
  // )
  return (
    <html lang='en' className='tracking-tighter'>
      <body className={`${dm_sans.className} bg-light-sky`}>{children}</body>
    </html>
  )
}
