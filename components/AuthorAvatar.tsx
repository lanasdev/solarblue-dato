/* eslint-disable jsx-a11y/alt-text */
import { Image, ResponsiveImageType } from 'react-datocms'

interface Author {
  name: string
  data: ResponsiveImageType
}

export default function AuthorAvatar(props: Author) {
  const { name, data } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image data={data} className="h-24 w-24 rounded-full" />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
