import Number from "./Number"
import personType from "../types/person.type"
import personService from "../services/persons";

const handleDelete = (person: personType) => {
  personService.deletePerson(person.id);
  window.confirm(`Are you sure you want to delete ${person.name}`)
  window.location.reload();
}

const Numbers = ({persons}: {persons: personType[]}) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person: personType) => 
        <li key={`${person.id}${person.name}`}>
          <Number name={person.name} number={person.number}/>
          <button onClick={() => handleDelete(person)} >
            Delete
          </button>
        </li>)}
      </ul>
    </>
  )
}

export default Numbers