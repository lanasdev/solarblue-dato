import Container from 'components/Container'
import HeroImg from 'img/Pexels-Photo-by-Binyamin-Mellish.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({
  title = 'Wir bauen & planen Sonnenenergie',
  subtitle = 'Erzeuge netzunabhängig & kostengünstig deinen eigenen Strom aus der Steckdose',
  image = HeroImg,
  cta = 'Mehr erfahren',
  ctaLink = '/#kontakt',
}) => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <Image
        src={HeroImg}
        alt="Hero Image"
        className="h-[90vh] w-full object-cover object-center md:object-left-bottom"
      />
      <div className="absolute top-24 left-5 flex max-w-md flex-col  md:left-16 md:max-w-2xl">
        <h1 className="pb-4 text-4xl font-semibold text-white md:text-7xl md:leading-[5.4rem]">
          {title}
        </h1>
        <p className="max-w-xs pb-16 text-white md:max-w-xl md:text-4xl md:leading-normal">
          {subtitle}
        </p>
        <Link
          href={ctaLink ? ctaLink : '/'}
          className="flex max-w-xs justify-center rounded-lg border-2 border-white px-4 py-4 font-semibold text-white backdrop-blur-xl transition  hover:bg-white hover:text-darkBlue "
        >
          {cta}
        </Link>
      </div>
    </div>
  )
}

export default Hero
