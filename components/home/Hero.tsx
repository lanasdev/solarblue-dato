import Container from 'components/BlogContainer'
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
      <div className="absolute top-24 left-5 flex max-w-md flex-col">
        <Container>
          <h1 className="pb-4 text-4xl font-semibold text-white md:text-7xl md:leading-[5.4rem]">
            {title}
          </h1>
          <p className="max-w-xs pb-16 text-white md:max-w-xl md:text-4xl md:leading-normal">
            {subtitle}
          </p>
          <Link
            href={ctaLink ? ctaLink : '/'}
            className="rounded-lg border-2 border-white px-4 py-2 font-semibold text-white backdrop-blur-xl transition  hover:bg-white hover:text-darkBlue "
          >
            {cta}
          </Link>
        </Container>
      </div>
    </div>
  )
}

export default Hero
