import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeistungTag = ({ leistung }) => {
  return (
    <div className="flex max-w-fit flex-row items-center gap-4 rounded-md border border-darkBlue p-4">
      <FontAwesomeIcon icon={leistung.icon} />
      <h2 className=" text-sm">{leistung.titel}</h2>
    </div>
  )
}
const LeistungTags = ({ leistungen }) => {
  return (
    <div className="flex flex-col gap-4 pt-4 md:flex-row">
      {leistungen.map((leistung) => (
        <LeistungTag key={leistung.slug} leistung={leistung} />
      ))}
    </div>
  )
}

export default LeistungTags
