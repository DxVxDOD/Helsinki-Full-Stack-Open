import React from 'react'

const Phonebook = (
        {listOfNames, filteredNames, setFilteredNames}: 
        {listOfNames: string[], filteredNames: string, setFilteredNames: React.Dispatch<React.SetStateAction<string>>}
    ) => {
  return (
    <>
    <h2>Phonebook</h2>
    <span>Fliter by name: <input name='q' type='search' onChange={(event) => setFilteredNames(event.target.value)} /></span>
    <p>{listOfNames.filter(names => names === filteredNames)}</p></>
  )
}

export default Phonebook