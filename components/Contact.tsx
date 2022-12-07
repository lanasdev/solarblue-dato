// import SectionContainer from "components/SectionContainer";
import Contactform from 'components/Contactform'
import Container from 'components/Container'
import dynamic from 'next/dynamic'
import { Envelope, Phone } from 'phosphor-react'
import { Suspense } from 'react'

const DynamicContactform = dynamic(() => import('components/Contactform'), {
  ssr: false,
})

const Contact = ({ contactData }) => {
  return (
    <div className=" bg-lightBlue px-4 pb-16 text-black" id="kontakt">
      <Container>
        <div className="flex flex-col items-stretch justify-between pt-16 md:flex-row ">
          <div className="flex-1 md:pr-16">
            <h3 className="max-w-xs pb-16 text-2xl font-semibold">
              {contactData.titel || 'Interesse geweckt?'}
            </h3>
            <p className="leading-6">
              {contactData.beschreibung ||
                'Dann kontaktieren Sie uns doch einfach und wir melden uns so schnell wie möglich zurück!'}
            </p>
            <div className="flex flex-col items-start justify-start gap-4 pt-14">
              <p>
                Bismarkstrasse 17 <br /> 70111 Stuttgart{' '}
              </p>
              <a
                href="mailto:matthias@lanas.dev"
                className="flex flex-row items-center justify-center gap-4 ease-in-out hover:underline hover:underline-offset-2"
              >
                <Envelope size={32} />
                <p>matthias@lanas.dev</p>
              </a>
              <a
                href="tel:+49 0711 123456"
                className="flex flex-row items-center justify-center gap-4 ease-in-out hover:underline hover:underline-offset-2"
              >
                <Phone size={32} />
                <p>+49 0711 123456</p>
              </a>
            </div>
          </div>
          <hr className="my-16 border-white" />
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicContactform />
          </Suspense>
        </div>
      </Container>
    </div>
  )
}

export default Contact
