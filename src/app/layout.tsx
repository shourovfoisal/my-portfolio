import { Navbar } from '@/components'
import './globals.css'
import { poppins } from '@/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* TODO make the container div for Navbar absolute/fixed, and the wrapper relative */}
        {/* This will let the hero/welcome section to calculate its own height independently  */}
        <div className='siteWrapper pb-wrapperPaddingBottom bg-BlackTan'>
          <section className="bg-BlackTan pt-sectionPadding">
            <div className="container">
              <Navbar />
            </div>
          </section>
          {children}
        </div>
      </body>
    </html>
  )
}
