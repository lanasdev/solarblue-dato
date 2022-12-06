/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Link from 'next/link'
import { Image, ResponsiveImageType } from 'react-datocms'

interface CoverImageProps {
  image: ResponsiveImageType
  href?: string
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { image, href, priority } = props

  const ThisImage = () => (
    <div
      className={clsx('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': href,
      })}
    >
      <Image
        className="h-64 w-full"
        objectFit="cover"
        data={image}
        priority={priority}
      />
    </div>
  )

  return (
    <div className="sm:mx-0">
      {href ? (
        <Link href={href} aria-label={href}>
          <ThisImage />
        </Link>
      ) : (
        <ThisImage />
      )}
    </div>
  )
}
