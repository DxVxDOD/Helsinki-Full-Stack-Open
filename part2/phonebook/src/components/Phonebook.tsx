import React from 'react';
import type PersonType from '../types/person.type';

const Phonebook = (
	{persons, filteredNames, setFilteredNames}:
	{persons: PersonType[]; filteredNames: string; setFilteredNames: React.Dispatch<React.SetStateAction<string>>},
) => {
	const searchResult = persons.map((person: PersonType) => person.name === filteredNames ? `${person.name}: ${person.number}` : '');

	return (
		<>
			<h2>Phonebook</h2>
			<span>Fliter by name: <input name='q' type='search' onChange={event => {
				setFilteredNames(event.target.value);
			}} /></span>
			<p>{searchResult}</p>
		</>
	);
};

export default Phonebook;
