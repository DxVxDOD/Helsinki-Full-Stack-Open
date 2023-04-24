import React, { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const listOfNames = persons.map((person): string => person.name);

  const [newName, setNewName] = useState('')

  const nameHandler = (event: React.FormEvent) => {
    event.preventDefault();
      if (!listOfNames.includes(newName) && newName !== '') {
        setPersons(persons.concat({name: newName}));
        setNewName('');
      } else if (newName === '') {
        alert('You need to enter a value');
      }
       else {
        alert('This name already exists');
        setNewName('');
      }
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={nameHandler} >
        <div>
          name: <input type='text' value={newName} onChange={(event) => setNewName(event.target.value) } />
        </div>
        <p>
          <button type="submit">Add</button>
        </p>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => 
      <Number key={person.name} name={person.name} /> )}
    </div>
  )
}

export default App