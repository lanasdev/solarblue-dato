import Contact from 'components/Contact'
import Container from 'components/Container'
import Blog from 'components/home/Blog'
import CTABreit from 'components/home/CTABreit'
import Fakten from 'components/home/Fakten'
import Hero from 'components/home/Hero'
import Leistungen from 'components/home/Leistungen'
import Referenzen from 'components/home/Referenzen'
import Team from 'components/home/Team'
import Testimonials from 'components/home/Testimonials'
import Layout from 'components/Layout'
import { getHome } from 'lib/api'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useQuerySubscription } from 'react-datocms'

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const project = await getHome(preview)

  return {
    props: project,
    revalidate: 30,
  }
}

export default function IndexRoute({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription)
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }
  const { home } = data
  const inhalt = data.home.inhalt

  return (
    <Layout>
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
      {/* <div className="grid grid-cols-1 [&>*]:border">
        {inhalt.map((i) => {
          return (
            <div key={i.__typename}>
              <h1>{i.__typename}</h1>
            </div>
          )
        })}
      </div> */}

      <div className="">
        {inhalt.map((i) => (
          <div key={i.__typename}>{switchComponent(i)}</div>
        ))}
      </div>
      {/* 
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}
    </Layout>
  )
}

const switchComponent = (i) => {
  switch (i.__typename) {
    case 'HeroRecord':
      return <Hero heroData={i} />
    case 'LeistungsektionRecord':
      return <Leistungen leistungenData={i} />
    case 'TeamsektionRecord':
      return <Team teamData={i} />
    case 'FaktensektionRecord':
      return <Fakten faktenData={i} />
    case 'ProjektesektionRecord':
      return <Referenzen referenzenData={i} />
    case 'CtabreitRecord':
      return <CTABreit ctabreitData={i} />
    case 'TestimonialsektionRecord':
      return <Testimonials testimonialsData={i} />
    case 'BlogsektionRecord':
      return <Blog blogData={i} />
    case 'KontaktsektionRecord':
      return <Contact contactData={i} />

    default:
      return null
  }
}
