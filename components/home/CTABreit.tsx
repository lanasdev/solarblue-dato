import Container from 'components/Container'
import Link from 'next/link'

const CTABreit = () => {
  return (
    <Container>
      <Link
        href={'/projekte'}
        className="h-92 group my-4 flex items-center justify-center rounded bg-gradient-to-t from-darkBlue to-lightBlue py-4 text-center text-white transition "
      >
        <div className="p-4 group-hover:underline">
          <h3 className="pb-4 text-2xl font-semibold">Interesse geweckt?</h3>
          <p className="max-w-[50vw]">
            Dann kontaktieren Sie uns doch oder kommen einfach vorbei!
          </p>
        </div>
      </Link>
    </Container>
  )
}

export default CTABreit
