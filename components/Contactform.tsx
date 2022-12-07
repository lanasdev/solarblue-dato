import { useForm, ValidationError } from '@formspree/react'
import clsx from 'clsx'

const Contactform = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE || 'xwkzrzwy'
  )

  const formInputClasses = clsx(
    'rounded-md px-4 pb-3 text-black invalid:ring-red-500 placeholder:focus:italic focus:valid:ring-darkBlue'
  )
  // const formTextareaClasses =
  //   'mb-4 rounded-xl pt-3 pb-12 text-black placeholder:focus:italic focus:valid:ring-darkBlue focus:invalid:ring-red-500'

  if (state.succeeded) {
    return (
      <div>
        <span className="underline decoration-green-500">
          Vielen Dank für Ihre Nachricht!
        </span>{' '}
        Wir melden uns so schnell wie möglich bei Ihnen.
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-[2]">
        <div className="flex w-full flex-col xl:flex-row xl:gap-8 ">
          <fieldset className="flex flex-col gap-2 pt-6 xl:flex-1">
            <label htmlFor="name" className=" font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              autoComplete="name"
              className={clsx('form-input ', formInputClasses)}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </fieldset>
          <fieldset className="flex flex-col gap-2 pt-6 xl:flex-1">
            <label htmlFor="email" className=" font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ihre Email"
              autoComplete="email"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className={clsx('form-input ', formInputClasses)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </fieldset>
        </div>
        <fieldset className="flex flex-col gap-2 pt-6">
          <label htmlFor="type" className=" font-medium">
            Projekttyp
          </label>
          <select
            name="type"
            id="type"
            className={clsx('form-select', formInputClasses)}
          >
            <option value="Photovoltaik">Photovoltaik</option>
            <option value="Energiespeicher">Energiespeicher</option>
            <option value="Elektrik">Elektrik</option>
            <option value="Wallbox">Wallbox</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
          <ValidationError prefix="Type" field="type" errors={state.errors} />
        </fieldset>

        <fieldset className="flex flex-col gap-2 pt-6">
          <label htmlFor="message" className=" font-medium">
            Nachricht
          </label>
          <textarea
            name="message"
            placeholder="Ihre Nachricht an uns"
            minLength={4}
            className={clsx('form-textarea', formInputClasses)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </fieldset>
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-8 rounded bg-white py-2 px-4 font-semibold hover:bg-darkBlue hover:text-white"
        >
          {state.submitting ? 'Sendet...' : 'Absenden'}
        </button>
      </form>
    </>
  )
}

export default Contactform
