import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { urlForImage } from 'lib/sanity.image'
import { leistungQuery, leistungSlugsQuery } from 'lib/sanity.queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'next-sanity'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })

  const leistung = await client.fetch(leistungQuery, { slug })

  return {
    props: {
      leistung,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })

  const slugs = await client.fetch(leistungSlugsQuery)

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

const Leistung = ({ leistung }) => {
  return (
    <div className="  rounded-lg bg-white p-2 text-center shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={urlForImage(leistung?.coverImage)
            .width(1200)
            .height(627)
            .format('webp')
            .url()}
          alt={leistung.title}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
        <h2 className="text-2xl font-bold">{leistung.title}</h2>
        <p className="text-lg">{leistung.description}</p>
        <Link
          href={`/leistung/${leistung.slug}`}
          className="rounded-lg bg-blue-500 px-4 py-2 text-lg text-white"
        >
          Mehr erfahren
        </Link>
      </div>
      <pre>
        <code>{JSON.stringify(leistung, null, 2)}</code>
      </pre>
    </div>
  )
}

export default Leistung
