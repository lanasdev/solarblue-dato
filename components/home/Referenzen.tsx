import clsx from 'clsx'
import Container from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'

const Referenzen = () => {
  const BoxClass = `bg-indigo-700 text-gray-100 min-w-full h-64 min-h-full rounded object-cover hover:bg-black/50 transition-all duration-300`

  return (
    <Container className="w-full pt-32 ">
      <div className="flex w-full justify-between pb-12">
        <h3 className="text-2xl font-semibold">Referenzen</h3>
        <Link
          href={'/projekte'}
          className="float-right underline hover:text-lightBlue hover:no-underline"
        >
          Mehr Referenzen anzeigen
        </Link>
      </div>
      {/* <div className="grid w-full grid-cols-4 grid-rows-2 gap-4 p-8">
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className="box object-cover"
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className="box object-cover"
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className="box col-start-3 col-end-5 row-start-1 row-end-3 object-cover"
        />
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=50"
          alt="image"
          className="box col-start-1 col-end-3 object-cover"
        />
      </div> */}

      <div className="[&>*]:box grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 ">
        <img
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
        />
      </div>
    </Container>
  )
}

export default Referenzen
