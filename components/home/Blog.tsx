/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-datocms'
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Link from 'next/link'
import Container from 'components/Container'
import clsx from 'clsx'

export default function Blog({ blogData }) {
  return (
    <Container className="pb-24">
      <div className="flex w-full justify-between pb-12">
        <h3 className="text-2xl font-semibold">{blogData.titel}</h3>
        <Link
          href={'/blog'}
          className="float-right underline hover:text-lightBlue hover:no-underline"
        >
          Mehr vom Blog anzeigen
        </Link>
      </div>
      <div className="flex flex-col gap-16 md:flex-row">
        <aside className="flex-1">
          <p className=" whitespace-pre-line">
            {blogData.beschreibung || 'Hier finden Sie unsere neusten Beiträge'}
          </p>
        </aside>
        <div className="grid flex-[3] grid-cols-1 gap-8 md:grid-cols-2">
          {blogData.blogliste.map((post) => (
            <BlogItem post={post} key={post.slug} />
          ))}
        </div>
      </div>
      <pre>{/* <code>{JSON.stringify(blogData, null, 2)}</code> */}</pre>
    </Container>
  )
}

export function BlogItem({ post }) {
  return (
    <div className="group">
      <div className="mb-5">
        <div className="sm:mx-0">
          {post.href ? (
            <CoverImage
              image={post.bild.responsiveImage}
              href={`/blog/${post.href}`}
            />
          ) : (
            <CoverImage image={post.bild.responsiveImage} />
          )}
        </div>
      </div>
      <h3 className="mb-3 text-2xl font-semibold">
        <Link href={`/blog/${post.href}`} className="group-hover:underline">
          {post.titel}
        </Link>
      </h3>
      {/* <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div> */}
      {post.beschreibung && (
        <p className="mb-4 text-lg leading-relaxed line-clamp-3">
          {post.beschreibung}
        </p>
      )}
      <span className="underline group-hover:text-lightBlue group-hover:no-underline">
        Mehr erfahren
      </span>
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  )
}
