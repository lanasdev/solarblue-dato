import Container from 'components/Container'
import Link from 'next/link'
import { BatteryCharging, Lightning, Sun } from 'phosphor-react'

const leistungen = [
  {
    title: 'Photovoltaik',
    description:
      'Photovoltaik ist die Umwandlung von Sonnenlicht in elektrische Energie. Die Sonnenstrahlen werden auf Solarzellen aufgebracht, die aus Silizium bestehen. Die Solarzellen werden in Modulen zusammengefasst und auf dem Dach montiert. Die Module werden mit einem Wechselrichter verbunden, der die Gleichstromspannung in Wechselstrom umwandelt. Der Strom wird dann in das öffentliche Stromnetz eingespeist. Die Photovoltaik-Anlage wird mit einer Solaranlage verbunden, die den Strom speichert. Der Strom wird dann bei Bedarf aus der Solaranlage entnommen. Die Solaranlage kann auch mit einem Batteriespeicher verbunden werden. Der Batteriespeicher speichert den Strom und gibt ihn bei Bedarf wieder ab. Die Solaranlage kann auch mit einem Batteriespeicher verbunden werden. Der Batteriespeicher speichert den Strom und gibt ihn bei Bedarf wieder ab.',
    icon: <Sun size={64} weight="fill" />,
    link: '/leistungen/photovoltaik',
    slug: 'photovoltaik',
  },
  {
    title: 'Batteriespeicher',
    description:
      'Batteriespeicher sind eine kostengünstige Möglichkeit, den Strom aus der Solaranlage zu speichern. Die Batteriespeicher werden mit der Solaranlage verbunden und speichern den Strom. Der Batteriespeicher kann auch mit einem Wechselrichter verbunden werden. Der Wechselrichter wandelt den Gleichstrom in Wechselstrom um. Der Strom wird dann in das öffentliche Stromnetz eingespeist. Die Batteriespeicher werden mit einem Wechselrichter verbunden und speichern den Strom. Der Batteriespeicher kann auch mit einem Wechselrichter verbunden werden. Der Wechselrichter wandelt den Gleichstrom in Wechselstrom um. Der Strom wird dann in das öffentliche Stromnetz eingespeist.',
    icon: <BatteryCharging size={64} weight="fill" />,
    link: '/leistungen/batteriespeicher',
    slug: 'batteriespeicher',
  },
  {
    title: 'Elektromobilität',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis massa quam adipiscing pharetra ut lorem. Neque aliquet posuere sagittis in dui.',
    icon: <Lightning size={64} weight="fill" />,
    link: '/leistungen/elektromobilitaet',
    slug: 'elektromobilitaet',
  },
]

type LeistungenProps = {
  leistungenData?: any
}

export default function Leistungen({ leistungenData }: LeistungenProps) {
  return (
    <Container>
      <div className="pt-24">
        {/* <pre className="whitespace-pre border-lightBlue py-16">
        {JSON.stringify(leistungen, null, 2)}
      </pre> */}
        <h3 className="pb-16 text-2xl font-semibold">{leistungenData.titel}</h3>
        <div className="flex flex-col gap-16 md:flex-row">
          {leistungenData.leistungenliste.map((item, index) => (
            <div key={item.slug} className="flex w-full flex-col md:w-1/3">
              {/* <span id="icon" className=" text-lightBlue">
              {item.icon}
            </span> */}
              <span id="icon" className=" text-lightBlue">
                {leistungen[index].icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{item.titel}</h3>
              <p className="mt-4 text-gray-500 line-clamp-4">
                {item.beschreibung}
              </p>
              <Link
                href={`/leistung/${item.slug}`}
                className="mt-4 underline decoration-gray-500 hover:text-lightBlue hover:no-underline"
              >
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
