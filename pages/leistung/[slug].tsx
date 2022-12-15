/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Contact from 'components/Contact'
import Container from 'components/Container'
import Gallery from 'components/Gallery'
import Layout from 'components/Layout'
import LeistungTags from 'components/LeistungTags'
import { getAllLeistungen, getLeistungBySlug } from 'lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  Image,
  renderMetaTags,
  StructuredText,
  useQuerySubscription,
} from 'react-datocms'

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const { slug } = params

  const leistung = await getLeistungBySlug(slug as string, preview)

  return {
    props: leistung,
    revalidate: 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const leistungen = await getAllLeistungen(true)

  return {
    paths: leistungen.map((leistung) => ({
      params: {
        slug: leistung.slug,
      },
    })),
    fallback: false,
  }
}

const Leistung = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription)
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }
  const { leistung, home, einstellungen } = data
  return (
    <Layout preview={subscription?.enabled}>
      <Head>{renderMetaTags(data.leistung.seo.concat(data.site.favicon))}</Head>
      <div className="pb-32">
        <Image
          data={leistung.bild.responsiveImage}
          objectFit="cover"
          // objectPosition={'50% 50%'}
          layout="responsive"
          className=" h-96 w-full object-cover"
          priority={true}
        />
        <div>
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

        <Container className="pt-16">
          {/* font awesome icon from leistung.icon */}
          <div className="flex flex-row items-center justify-start gap-4 pb-8">
            <FontAwesomeIcon
              icon={leistung.icon}
              className="h-12 w-12 text-darkBlue"
            />
            <h1 className="pb-4 text-2xl">{leistung.titel}</h1>
          </div>
          <h2 className="text-md ">{leistung.beschreibung}</h2>

          {/* <LeistungTags leistungen={leistung.typ} /> */}

          <div className="prose pt-16">
            <StructuredText data={leistung.text} />
          </div>
          {leistung.projekte.length > 1 && (
            <>
              <h3 className="pt-32  text-xl">{leistung.titel} Referenzen</h3>
              <div className="[&>*]:box grid grid-cols-2 gap-4 pt-12 md:grid-cols-4 ">
                {leistung?.projekte.map((referenz, index) => (
                  <Link
                    key={referenz.slug}
                    href={`/projekte/${referenz.slug}`}
                    className={clsx(
                      ' group relative overflow-hidden'
                      // GridClasses[index]
                    )}
                  >
                    <Image
                      data={referenz.bild.responsiveImage}
                      objectFit="cover"
                      className={clsx(
                        `h-64 min-h-full w-full min-w-full overflow-auto rounded bg-indigo-700 object-cover  transition-shadow duration-200 group-hover:shadow-medium`
                      )}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50	">
                      <h4 className="px-4 text-xl text-gray-100 opacity-0 group-hover:opacity-100">
                        {referenz.titel}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </Container>

        {/* <pre>
          <code>{JSON.stringify(subscription, null, 2)}</code>
        </pre> */}
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

export default Leistung
