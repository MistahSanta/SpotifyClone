import Sidebar from '@/components/Sidebar'
import './globals.css'

import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'

 const font = Figtree( {subsets: ['latin'] });


export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to your music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>
              {children}
            </Sidebar>
            
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
