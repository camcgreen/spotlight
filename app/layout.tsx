import { DM_Sans } from 'next/font/google'
import './globals.css'
import { EdgeStoreProvider } from '@/lib/edgestore'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='tracking-tighter'>
      <body className={`${dm_sans.className} bg-light-sky`}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  )
}
