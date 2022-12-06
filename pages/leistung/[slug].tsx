import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug } = params

//   return {
//     props: {},
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { slug: 'test' } }],
//     fallback: false,
//   }
// }

const Leistung = ({}) => {
  return (
    <div className="  rounded-lg bg-white p-2 text-center shadow-lg">
      <div className="relative h-64 w-full">
        {/* <Image
          src={}
          alt={leistung.title}
          className="rounded-lg object-cover"
        /> */}
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
        {/* <h2 className="text-2xl font-bold">{leistung.title}</h2>
        <p className="text-lg">{leistung.description}</p>
        <Link
          href={`/leistung/${leistung.slug}`}
          className="rounded-lg bg-blue-500 px-4 py-2 text-lg text-white"
        >
          Mehr erfahren
        </Link> */}
      </div>
      {/* <pre>
        <code>{JSON.stringify(leistung, null, 2)}</code>
      </pre> */}
    </div>
  )
}

export default Leistung
