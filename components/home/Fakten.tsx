import Container from 'components/Container'

const Fakten = () => {
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
    <Container className="mx-auto pt-24 ">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        {DetailsData.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="text-6xl text-lightBlue">{item.number}</span>
            <p className="text-md max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Fakten
