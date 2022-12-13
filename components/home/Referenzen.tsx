/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Container from 'components/Container'
import Link from 'next/link'
import { Image } from 'react-datocms'

const Referenzen = ({ referenzenData }) => {
  const BoxClass = `bg-indigo-700 text-gray-100 min-w-full h-64 min-h-full rounded object-cover `

  const GridClasses = [
    '',
    '',
    'col-span-2 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3',
    'col-span-2 row-span-2 md:col-start-1 md:col-end-3',
  ]

  return (
    <>
      <Container className="w-full pt-32 ">
        <div className="flex w-full justify-between pb-12">
          <h3 className="text-2xl font-semibold">{referenzenData.titel}</h3>
          <Link
            href={'/projekte'}
            className="float-right pl-4 underline hover:text-lightBlue hover:no-underline"
          >
            Mehr Referenzen anzeigen
          </Link>
        </div>
        <div className="[&>*]:box grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 ">
          {referenzenData.gallerie.map((referenz, index) => (
            <Link
              key={referenz.slug}
              href={`/projekte/${referenz.slug}`}
              className={clsx(
                ' group relative overflow-hidden',
                GridClasses[index]
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
      </Container>
    </>
  )
}

export default Referenzen

{
  /* <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className={clsx(BoxClass, '')}
        />

        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className={clsx(BoxClass, '')}
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className={clsx(
            BoxClass,
            'col-span-2 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3'
          )}
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className={clsx(
            BoxClass,
            'col-span-2 row-span-2 md:col-start-1 md:col-end-3'
          )}
        /> */
}
