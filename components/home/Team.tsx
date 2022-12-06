/* eslint-disable jsx-a11y/alt-text */
import Container from 'components/Container'
import Link from 'next/link'
import { Image } from 'react-datocms'

const Team = ({ teamData }) => {
  const { titel, text, bild } = teamData

  return (
    <Container>
      <section className="flex w-full flex-col pt-32 md:flex-row md:gap-16">
        <Image
          data={bild.responsiveImage}
          className="rounded-lg object-cover md:w-1/2"
        />
        <div className="pt-12 ">
          <h4 className="pb-6 text-2xl font-semibold">{titel}</h4>
          {/* TODO: Fix content & image alignment */}
          <p className="text-gray-[#404040] whitespace-pre-line  pb-4">
            {text}
          </p>
        </div>
      </section>
    </Container>
  )
}

export default Team
