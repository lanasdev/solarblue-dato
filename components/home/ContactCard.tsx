import {
  Envelope,
  InstagramLogo,
  MapPin,
  Phone,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'

const ContactCard = ({ social }) => {
  const { email, telefonnummer, adresse, instagram, twitter, youtube } = social

  const IconSize = 64

  return (
    <>
      <div className=" z-20 hidden bg-lightBlue text-white md:absolute md:bottom-0 md:right-16 md:flex md:translate-y-1/2 md:flex-row md:justify-between md:gap-8 md:rounded-lg md:p-8 md:[&>*]:px-4 md:[&>*]:py-2">
        {telefonnummer && (
          <a
            href={`tel:${telefonnummer}`}
            className="flex flex-col items-center justify-start"
          >
            <Phone size={IconSize} className="" />
            <span className="pt-4 pb-2 text-center font-semibold">Telefon</span>
            <p className="">{telefonnummer}</p>
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center justify-start"
          >
            <Envelope size={IconSize} className="" />
            <span className="pt-4 pb-2 text-center font-semibold">Email</span>
            <p className="">{email}</p>
          </a>
        )}
        {adresse && (
          <a href={``} className="flex flex-col items-center justify-start">
            <MapPin size={IconSize} className="" />
            <span className="pt-4 pb-2 text-center font-semibold">Adresse</span>
            <p className=" whitespace-pre-line">{adresse}</p>
          </a>
        )}
      </div>
    </>
  )
}

export default ContactCard
