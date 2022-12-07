import clsx from 'clsx'
import Container from 'components/Container'
import Image from 'next/image'
import Link from 'next/link'

// const Testimonials = () => {

const TestimonialItem = ({ name, text }) => {
  return (
    <div className="group flex flex-col gap-4 md:flex-row ">
      <span className="aspect-square h-8 w-8 rounded-full bg-gradient-to-t from-lightBlue  to-darkBlue group-hover:animate-spin md:h-10 md:w-10 " />
      <div className="flex flex-col">
        <p className="text-md max-w-xl pb-6 md:text-lg">{text}</p>
        <p className="text-md ">{name}</p>
      </div>
    </div>
  )
}

const Testimonials = ({ testimonialsData }) => {
  return (
    <Container className=" py-24 md:py-32">
      <h3 className="pb-16 text-2xl font-semibold">
        {testimonialsData.titel || 'Was unsere Kunden sagen'}
      </h3>
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        {testimonialsData.testimonialliste.map((item) => (
          <TestimonialItem key={item.id} name={item.name} text={item.text} />
        ))}
      </div>
    </Container>
  )
}

export default Testimonials
