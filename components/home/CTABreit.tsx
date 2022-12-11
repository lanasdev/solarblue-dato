import Container from 'components/Container'
import Link from 'next/link'

const CTABreit = ({ ctabreitData }) => {
  return (
    <Container>
      <Link
        href={'/#kontakt'}
        className="h-92 group my-4 flex items-center justify-center rounded bg-gradient-to-t from-darkBlue to-lightBlue py-4 text-center text-white transition  duration-200 hover:rounded-none hover:from-lightBlue hover:to-lightBlue hover:shadow-medium "
      >
        <div className="p-4 ">
          <h3 className="pb-4 text-2xl font-semibold group-hover:underline">
            {ctabreitData.titel || 'Interesse geweckt?'}
          </h3>
          <p className="max-w-[50vw]">
            {ctabreitData.beschreibunung ||
              'Dann kontaktieren Sie uns doch oder kommen einfach vorbei!'}
          </p>
        </div>
      </Link>
    </Container>
  )
}

export default CTABreit
