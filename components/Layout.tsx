import clsx from 'clsx'
import Navbar from 'components/Navbar'
import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from './Footer'

type Props = {
  children: ReactNode
  preview?: boolean
}

export default function Layout({ children, preview = false }: Props) {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Solarblue, photovoltaic, energy storage, pv, electrician"
        />
        <meta name="author" content="Lanas.dev" />
      </Head>
      <main className="">
        <Navbar />
        {/* <Alert preview={preview} /> */}
        {children}
        <Footer />
      </main>
    </div>
  )
}
