/* eslint-disable jsx-a11y/alt-text */
import Container from 'components/Container'
import HeroImg from 'img/Pexels-Photo-by-Binyamin-Mellish.png'
import Link from 'next/link'
import { Image } from 'react-datocms'

import ContactCard from './ContactCard'

type heroProps = {
  heroData: {
    title: string
    subtitle: string
    cta: string
    ctaLink: string
  }
}

const Hero = ({ heroData, social }) => {
  const { titel, untertitel, cta, ctaLink, bild } = heroData

  return (
    <section className="relative">
      <div className="relative w-full  overflow-hidden bg-white">
        {/* TODO: Fix Stretch on Image */}
        <Image
          data={bild.responsiveImage}
          className="h-[90vh] w-full object-cover object-center "
          layout="responsive"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute top-24 left-5 flex max-w-md flex-col px-5 md:top-1/2 md:left-1/2 md:max-w-none  md:-translate-y-1/2 md:-translate-x-1/2  md:transform md:items-center">
          <h1 className="pb-4 text-4xl font-semibold text-white md:max-w-none md:text-center md:text-7xl md:leading-[5.4rem]">
            {titel}
          </h1>
          <h2 className="max-w-xs pb-16 text-white md:max-w-4xl md:text-center md:text-4xl md:leading-normal">
            {untertitel}
          </h2>
          <Link
            href={ctaLink ? ctaLink : '/#leistungen'}
            className="flex max-w-fit justify-center rounded-lg border-2 border-white px-4 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white  hover:text-darkBlue md:max-w-lg "
          >
            {cta ? cta : 'Mehr erfahren'}
          </Link>
        </div>
      </div>
      <ContactCard social={social} />
    </section>
  )
}

export default Hero

// {
//   title = 'Wir bauen & planen Sonnenenergie',
//   subtitle = 'Erzeuge netzunabhängig & kostengünstig deinen eigenen Strom aus der Steckdose',
//   image = HeroImg,
//   cta = 'Mehr erfahren',
//   ctaLink = '/#kontakt',
// },
