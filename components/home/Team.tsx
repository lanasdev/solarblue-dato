import TeamImage from 'img/pexels-kindel-media-9875405.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Team = () => {
  return (
    <>
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
      <Details />
    </>
  )
}

export default Team

const Details = () => {
  const DetailsData = [
    {
      id: 1,
      text: 'Festangestellte Mitarbeiter',
      number: 7,
    },
    {
      id: 2,
      text: 'Jahre Erfahrung',
      number: 16,
    },
    {
      id: 3,
      text: 'GWh haben unsere Solaranlagen generiert',
      number: 369,
    },
  ]

  return (
    <section className="mx-auto pt-24 ">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        {DetailsData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-6xl text-lightBlue">{item.number}</span>
            <p className="text-md max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
