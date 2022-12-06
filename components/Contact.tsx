// import SectionContainer from "components/SectionContainer";
import Contactform from 'components/Contactform'
import { Envelope, Phone } from 'phosphor-react'

import Container from 'components/Container'

const Contact = () => {
  return (
    <div className=" bg-lightBlue px-4 pb-16 text-black" id="kontakt">
      <Container>
        <div className="flex flex-col items-stretch justify-between pt-16 md:flex-row ">
          <div className="flex-1 md:pr-16">
            <h3 className="max-w-xs pb-16 text-2xl font-semibold">
              Interesse geweckt?
            </h3>
            <p className="leading-6">
              Dann kontaktieren Sie uns doch einfach und wir melden uns so
              schnell wie möglich zurück!
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
          <Contactform />
        </div>
      </Container>
    </div>
  )
}

export default Contact
