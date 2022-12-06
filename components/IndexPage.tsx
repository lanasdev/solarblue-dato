import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import Leistungen from 'components/home/Leistungen'
import Referenzen from 'components/home/Referenzen'
import Team from 'components/home/Team'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import type { Leistung, Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

import Contact from './Contact'
import Hero from './home/Hero'
import Testimonials from './home/Testimonials'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  leistungen: Leistung[]
  settings: Settings
}) {
  const { preview, loading, posts, leistungen, settings } = props
  const [heroPost, ...morePosts] = posts
  const { title = 'Blog.' } = settings

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Head>
          <title>{title}</title>
        </Head>
        <Hero />
        <Container>
          <Leistungen leistungen={leistungen} />
          <Team />
          <Referenzen />
          <Testimonials />
          <div className="pb-32"></div>
          {/* <BlogHeader title={title} level={1} /> */}
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <Contact />

        {/* <IntroTemplate /> */}
      </Layout>
    </>
  )
}
