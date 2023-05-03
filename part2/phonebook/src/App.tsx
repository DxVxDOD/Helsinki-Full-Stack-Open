/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import Numbers from './components/Numbers';
import Persons from './components/Persons';
import Phonebook from './components/Phonebook';
import type PersonType from './types/person.type';
import personService from './services/persons';
import Success from './components/Success';
import Error from './components/Error';

const App = () => {
	const [persons, setPersons] = useState<PersonType[]>([]);
	const [newName, setNewName] = useState('David');
	const [newNumber, setNewNumber] = useState('123-456789');
	const [newId, setnewId] = useState(0);
	const [filteredNames, setFilteredNames] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const listOfNames = persons.map(person => person.name.toLowerCase());
	const listofNumbers = persons.map(person => person.number);
	const listOfIds = persons.map(persons => persons.id);

	const detailHandler = (event: React.FormEvent) => {
		event.preventDefault();
		setnewId(listOfIds.length + Math.floor(Math.random() * 10000));
		const person = {name: newName, number: newNumber, id: newId};
		if (!listOfNames.includes(newName.toLowerCase()) && !listofNumbers.includes(newNumber) && newName !== '') {
			personService
				.postPerson(person)
				.then(() => {
					setPersons(persons.concat(person));
				})
				.then(() => {
					setSuccessMessage(`${person.name} has been successfully added`);
				})
				.then(() => setTimeout(() => {
					setSuccessMessage('');
				}, 5000))
				.catch(error => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					setErrorMessage(error.response.data.error);
				})
				.then(() => setTimeout(() => {
					setErrorMessage('');
				}, 5000)).catch(err => {
					console.log(err);
				});
			setNewName('');
			setNewNumber('');
		} else if (listOfNames.includes(newName.toLowerCase())) {
			window.confirm(`${newName} already exists in your phonebook. Would you like to update their number ?`);
			const person = persons.find(person => person.name === newName);
			const changedPerson = {name: newName, number: newNumber, id: newId};
			if (person) {
				personService
					.updatePerson(person.id, changedPerson)
					.then(() => {
						setSuccessMessage(`${person.name} has successfully been updated`);
					})
					.then(() => setTimeout(() => {
						setSuccessMessage('');
					}, 5000))
					.catch(error => {
						// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
						setErrorMessage(error.response.data.error);
					})
					.then(() => setTimeout(() => {
						setErrorMessage('');
					}, 5000)).catch(err => {
						console.log(err);
					});
			}

			setNewName('');
			setNewNumber('');
		} else if (listofNumbers.includes(newNumber)) {
			alert(`${newNumber} already exists`);
			setNewNumber('');
		} else if (newName === '') {
			alert('You need to enter a valid name');
		} else {
			alert('You need to enter valid values!');
		}
	};

	useEffect(() => {
		personService.getAll().then((initialPersons: PersonType[]) => {
			setPersons(initialPersons);
		}).catch(err => {
			console.log(err);
		});
	}, []);

	return (
		<>
			<Phonebook persons={persons} filteredNames={filteredNames} setFilteredNames={setFilteredNames}/>
			<Success message={successMessage} />
			<Error error={errorMessage} />
			<Persons detailHandler={detailHandler} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
			<Numbers persons={persons} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
		</>
	);
};

export default App;
