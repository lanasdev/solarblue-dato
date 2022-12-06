/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Link from 'next/link'
import { Image, ResponsiveImageType } from 'react-datocms'

interface CoverImageProps {
  data: ResponsiveImageType
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { data, slug, image, priority } = props

  const ThisImage = () => (
    <div
      className={clsx('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        data={data}
        sizes="100vw"
        priority={priority}
      />
    </div>
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={slug}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
