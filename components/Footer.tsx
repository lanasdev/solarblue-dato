import Image from 'next/image'
import Link from 'next/link'
import { InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import Container from 'components/BlogContainer'

const Footer = () => {
  return (
    <footer className="min-h-[30vh] bg-[#1E1E1E] px-4 py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <Link href={'/'} className="text-3xl tracking-wide text-lightBlue">
              {process.env.NEXT_PUBLIC_SITE_NAME || 'Solarblue'}
            </Link>
            <div className="flex space-x-8 pt-4 text-white" id="socials">
              <Link
                href="https://instagram.com/lanasdev"
                className=" transition-all hover:rotate-12 hover:text-orange-400"
                aria-label="Solarblue Instagram Account"
              >
                <InstagramLogo size={32} />
              </Link>
              <Link
                href="https://twitter.com/lanasdev"
                className=" transition-all hover:rotate-12 hover:text-lightBlue"
                aria-label="Solarblue Twitter Account"
              >
                <TwitterLogo size={32} className="hover:fill-blue-400" />
              </Link>
              <Link
                href="https://youtube.com/"
                className=" transition-all hover:rotate-12 hover:text-red-500"
                aria-label="Solarblue Youtube Kanal"
              >
                <YoutubeLogo size={32} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-16 text-white sm:grid-cols-4 md:pt-0 ">
            {FooterData.map((item, index) => (
              <div
                className="flex flex-col justify-start space-y-2 px-2 pt-10 md:pt-0"
                key={index}
              >
                <Link
                  href={item.href}
                  className="pb-4 font-bold decoration-white hover:underline"
                >
                  {item.title}
                </Link>
                {item.children.map((child, index) => (
                  <Link
                    href={child.href}
                    key={index}
                    className="text-sm decoration-white hover:underline"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

const FooterData = [
  // {
  //     title: "Home",
  //     href: "/",
  //     children: []
  // },
  {
    title: 'Leistungen',
    href: '/leistungen',
    children: [
      {
        title: 'Photovoltaik',
        href: '/leistungen/photovoltaik',
      },
      {
        title: 'Wallboxen',
        href: '/leistungen/wallbox',
      },
      {
        title: 'Batteriespeicher',
        href: '/leistungen/stromspeicher',
      },
    ],
  },
  {
    title: 'Projekte',
    href: '/projekte',
    children: [
      {
        title: 'Grundschule Stuttgart',
        href: '/projekte/grundschule-stuttgart',
      },
      {
        title: 'Busbahnhof München',
        href: '/projekte/busbahnhof-munchen',
      },
      {
        title: 'Einfamilienhaus Konstanz',
        href: '/projekte/einfamilienhaus-konstanz',
      },
    ],
  },
  {
    title: 'Über uns',
    href: '/ueber',
    children: [
      {
        title: 'Mitarbeiter',
        href: '/ueber/mitarbeiter',
      },
      {
        title: 'Kontakt',
        href: '/ueber/kontakt',
      },
      {
        title: 'Karriere',
        href: '/ueber/karriere',
      },
    ],
  },

  {
    title: 'Rechtliches',
    href: '/rechtliches',
    children: [
      {
        title: 'AGB',
        href: '/rechtliches/agb',
      },
      {
        title: 'Datenschutz',
        href: '/rechtliches/datenschutz',
      },
      {
        title: 'Impressum',
        href: '/rechtliches/impressum',
      },
    ],
  },
]
