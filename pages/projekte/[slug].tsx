/* eslint-disable jsx-a11y/alt-text */
import Contact from 'components/Contact'
import Container from 'components/Container'
import Gallery from 'components/Gallery'
import Layout from 'components/Layout'
import LeistungTags from 'components/LeistungTags'
import { getAllProjects, getProjectBySlug } from 'lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  Image,
  renderMetaTags,
  StructuredText,
  useQuerySubscription,
} from 'react-datocms'

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const project = await getProjectBySlug(params.slug as string, preview)

  return {
    props: project,
    revalidate: 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjects(true)

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  }
}

export default function Project({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription)
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }
  const { projekt, home, einstellungen } = data
  return (
    <Layout preview={subscription?.enabled}>
      <div className="pb-16">
        <div>
          <Head>
            {renderMetaTags(data.projekt.seo.concat(data.site.favicon))}
          </Head>

          {/* DatoCMS Live updates */}
          {status != 'closed' && (
            <div className="pb-8">
              <p>Connection status: {statusMessage[status]}</p>
              {error && (
                <div>
                  <h1>Error: {error.code}</h1>
                  <div>{error.message}</div>
                  {error.response && (
                    <pre>{JSON.stringify(error.response, null, 2)}</pre>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <Image
          data={projekt.bild.responsiveImage}
          objectFit="cover"
          // objectPosition={'50% 50%'}
          layout="responsive"
          className=" h-96 w-full object-cover"
        />
        <Container className="pt-16">
          <h1 className="pb-4 text-2xl">{projekt.titel}</h1>
          <h2 className="text-md ">{projekt.beschreibung}</h2>

          <LeistungTags leistungen={projekt.typ} />

          <div className="prose pt-16">
            <StructuredText data={projekt.text} />
          </div>
          {projekt.gallerie.length > 1 && (
            <>
              <h3 className="pt-16 text-xl">Gallerie</h3>
              <Gallery images={projekt.gallerie} />
            </>
          )}
        </Container>
        {/* <pre className="pt-32">{JSON.stringify(projekt, null, 2)}</pre> */}
      </div>
      <>
        {home.inhalt
          .filter((item) => item.__typename === 'KontaktsektionRecord')
          .slice(0, 1) // only show first contact section
          .map((item) => (
            <Contact key={item.id} contactData={item} />
          ))}
      </>
    </Layout>
  )
}
