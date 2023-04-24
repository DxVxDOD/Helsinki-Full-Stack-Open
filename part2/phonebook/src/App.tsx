import React, { useState } from 'react'
import Numbers from './components/Numbers';
import Persons from './components/Persons';
import Phonebook from './components/Phonebook';

const App = () => {
  const [persons, setPersons] = useState([ 
    { name: 'Arto Hellas', number: 140-123456, id: 1 },
    { name: 'Ada Lovelace', number: 39-44-5323523, id: 2 },
    { name: 'Dan Abramov', number: 12-43-234345, id: 3 },
    { name: 'Mary Poppendieck', number: 39-23-6423122, id: 4 }
   ])
  const [newName, setNewName] = useState('David');
  const [newNumber, setNewNumber] = useState(1234567899);
  const [newID, setNewID] = useState(0);
  const [filteredNames, setFilteredNames] = useState('')

  const listOfNames = persons.map((person): string => person.name);
  const listofNumbers = persons.map((person): number => person.number);
  const listOfIds = persons.map((persons) => persons.id)

  const detailHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setNewID(listOfIds.length + 1);
      if (!listOfNames.includes(newName.toLowerCase()) && !listofNumbers.includes(newNumber)
          && !isNaN(newNumber) && newName !== '') {
        setPersons(persons.concat({name: newName, number: newNumber, id: newID})); 
        setNewName('');
        setNewNumber(0);
      } else if (listOfNames.includes(newName.toLowerCase()) && newNumber) {
        alert(`${newName} already exists`);
        setNewName('');
      } else if (listofNumbers.includes(newNumber) && newName) {
        alert(`${newNumber} already exists`);
        setNewNumber(0);
      } else if (isNaN(newNumber)) alert('You need to enter a valid number');
        else if (newName === '') alert('You need to enter a valid name');
        else alert('You need to enter valid values!');
    }

  return (
    <>
      <Phonebook listOfNames={listOfNames} filteredNames={filteredNames} setFilteredNames={setFilteredNames}/>
      <Persons detailHandler={detailHandler} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <Numbers persons={persons} />
    </>
  )
}

export default App