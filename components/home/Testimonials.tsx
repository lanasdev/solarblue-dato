import clsx from 'clsx'
import Container from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'

// const Testimonials = () => {

const TestimonialItem = ({ name, text }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <span className="h-8 w-8 rounded-full bg-gradient-to-t  from-lightBlue to-darkBlue md:h-10 md:w-10 " />
      <div className="flex flex-col">
        <p className="text-md pb-6 md:text-xl">{text}</p>
        <p className="text-md md:text-xl">{name}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const TestimonialsData = [
    {
      id: 1,
      name: 'Reiner Reinhold',
      text: 'Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!',
    },
    {
      id: 2,
      name: 'Volker Voltaik',
      text: 'Sehr kompetente Beratung, sehr gute Planung und Ausführung. Wir sind sehr zufrieden mit der Anlage und dem Service. Wir können Solarblue nur weiterempfehlen.',
    },
  ]

  return (
    <Container className="py-24">
      <h3 className="pb-16 text-2xl font-semibold">Was unsere Kunden sagen</h3>
      <div className="flex flex-col gap-12  md:flex-row">
        {TestimonialsData.map((item) => (
          <TestimonialItem key={item.id} name={item.name} text={item.text} />
        ))}
      </div>
    </Container>
  )
}

export default Testimonials
