import React, { useEffect, useState } from 'react'
import Numbers from './components/Numbers';
import Persons from './components/Persons';
import Phonebook from './components/Phonebook';
import personType from './types/person.type';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState<personType[]>([]);
  const [newName, setNewName] = useState('David');
  const [newNumber, setNewNumber] = useState(1234567899);
  const [newID, setNewID] = useState(0);
  const [filteredNames, setFilteredNames] = useState('');

  const listOfNames = persons.map((person): string => person.name);
  const listofNumbers = persons.map((person): number => person.number);
  const listOfIds = persons.map((persons) => persons.id);

  const detailHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setNewID(listOfIds.length + 1);
    const person = { name: newName, number: newNumber, id: newID };
      if (!listOfNames.includes(newName.toLowerCase()) && !listofNumbers.includes(newNumber)
          && !isNaN(newNumber) && newName !== '') {
            setPersons(persons.concat(person)); 
            setNewName('');
            setNewNumber(0);
            personService.postPerson(person);

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

    useEffect(() => {
        personService.getAll().then(initialPersons => setPersons(initialPersons));
    }, []);

  return (
    <>
      <Phonebook persons={persons} filteredNames={filteredNames} setFilteredNames={setFilteredNames}/>
      <Persons detailHandler={detailHandler} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <Numbers persons={persons}/>
    </>
  )
}

export default App