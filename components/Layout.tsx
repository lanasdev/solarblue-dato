import clsx from 'clsx'
import Navbar from 'components/Navbar'
import Head from 'next/head'
import { ReactNode } from 'react'

import Contact from './Contact'
import Footer from './Footer'
import MetaTags from './MetaTags'

type Props = {
  children: ReactNode
  preview?: boolean
}

export default function Layout({ children, preview = false }: Props) {
  return (
    <div>
      <Head>
        <MetaTags
          description={
            'Wir liefern Ihnen Eneuerbare Energien direkt auf Ihr Dach'
          }
        />
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
