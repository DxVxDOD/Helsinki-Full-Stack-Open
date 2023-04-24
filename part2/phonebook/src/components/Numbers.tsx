import Number from "./Number"
import personType from "../types/person.type"

const Numbers = ({persons}: {persons: personType[]}) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person: personType) => <Number key={person.id} name={person.name} number={person.number}/> )}
      </ul>
    </>
  )
}

export default Numbers