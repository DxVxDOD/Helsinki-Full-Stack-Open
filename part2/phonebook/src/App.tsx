import React, { useEffect, useState } from 'react'
import Numbers from './components/Numbers';
import Persons from './components/Persons';
import Phonebook from './components/Phonebook';
import personType from './types/person.type';
import personService from './services/persons';
import Success from './components/Success'

const App = () => {
  const [persons, setPersons] = useState<personType[]>([]);
  const [newName, setNewName] = useState('David');
  const [newNumber, setNewNumber] = useState(1234567899);
  const [newID, setNewID] = useState(0);
  const [filteredNames, setFilteredNames] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const listOfNames = persons.map((person): string => person.name.toLowerCase());
  const listofNumbers = persons.map((person): number => person.number);
  const listOfIds = persons.map((persons) => persons.id);

  const detailHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setNewID(listOfIds.length + Math.floor(Math.random() * 10000));
    const person = { name: newName, number: newNumber, id: newID };
      if (!listOfNames.includes(newName.toLowerCase()) && !listofNumbers.includes(newNumber)
          && !isNaN(newNumber) && newName !== '') {
            personService
            .postPerson(person)
            .then(() => setPersons(persons.concat(person)))
            .then(() => setSuccessMessage(`${person.name} has been succesfully added`))
            .then(() => setTimeout(() => setSuccessMessage(''), 5000));
            setNewName('');
            setNewNumber(0);

      } else if (listOfNames.includes(newName.toLowerCase())) {
        window.confirm(`${newName} already exists in your phonebook. Would you like to update their number ?`);
        const person = persons.find(person => person.name === newName);
        const changedPerson = {name: newName, number: newNumber, id: newID};
        person ? personService.updatePerson(person.id, changedPerson) : '';
        window.location.reload();
        setNewName('');
        setNewNumber(0);

      } else if (listofNumbers.includes(newNumber)) {
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
      <Success message={successMessage} />
      <Persons detailHandler={detailHandler} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <Numbers persons={persons}/>
    </>
  )
}

export default App