import Number from "./Number"
import personType from "../types/person.type"
import personService from "../services/persons";

const handleDelete = (person: personType, setSuccessMessage: (message: string) => void, setErrorMessage: (message: string) => void) => {
  window.confirm(`Are you sure you want to delete ${person.name} ?`);
  personService
  .deletePerson(person.id)
  .then(() => setSuccessMessage(`${person.name} has successfully been deleted.`))
  .then(() => setTimeout(() => setSuccessMessage(''), 5000))
  .catch(error => setErrorMessage(error.response.data.error))
  .then(() => setTimeout(() => {
    setErrorMessage('');
    window.location.reload();
  }, 5000));
}

const Numbers = (
  {persons, setErrorMessage, setSuccessMessage}:
  {persons: personType[], setErrorMessage: React.Dispatch<React.SetStateAction<string>>, setSuccessMessage:  React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person: personType) => 
        <li key={`${person.id}${person.name}`}>
          <Number name={person.name} number={person.number}/>
          <button onClick={() => handleDelete(person, setSuccessMessage, setErrorMessage)} >
            Delete
          </button>
        </li>)}
      </ul>
    </>
  )
}

export default Numbers