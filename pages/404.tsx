import Layout from 'components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-6xl font-bold">Page Not Found</h2>
        <Link href="/">
          <a className="text-3xl font-bold">Go Back Home</a>
        </Link>
      </div>
    </Layout>
  )
}
