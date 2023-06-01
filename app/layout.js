import './globals.css'
import Header from './components/Header'
// by line 2 and 3 we can just take any font and use it here inter is a font actually
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Page Title',
  description: 'Description of Page title',
  keywords:"next, react"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main className='container'>
      {children}
      </main>
     </body>
    </html>
  )
}
