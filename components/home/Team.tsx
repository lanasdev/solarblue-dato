import Container from 'components/Container'
import TeamImage from 'img/pexels-kindel-media-9875405.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Team = () => {
  return (
    <Container>
      <section className="flex w-full flex-col pt-32 md:flex-row md:gap-16">
        <Image
          src={TeamImage}
          alt="Team Image"
          className="rounded-lg object-cover md:w-1/2"
        />
        <div className="pt-12 ">
          <h4 className="pb-6 text-2xl font-semibold">Unser Team</h4>
          <p className="text-gray-[#404040] pb-4">
            Wir suchen innovative und unternehmerisch denkende Menschen, die
            sich mit Leidenschaft für unser Unternehmen und das Wohl ihrer
            Kunden engagieren.
          </p>

          <p className="text-gray-[#404040]">
            Finden Sie hier unsere aktuellen Stellenangebote. Falls Sie noch am
            Anfang ihrer Karriere stehen, dann bietet ein Ausbildungsplatz bei
            Solarblue einen Einstieg mit besten Perspektiven.
          </p>
        </div>
      </section>
    </Container>
  )
}

export default Team
