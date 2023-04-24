import React from 'react';

const Persons = (
        { detailHandler, newName, newNumber, setNewName, setNewNumber}: 
        { detailHandler: (event: React.FormEvent) => void, newName: string, newNumber: number, 
        setNewName: React.Dispatch<React.SetStateAction<string>>, setNewNumber: React.Dispatch<React.SetStateAction<number>> }
    ) => {
  return (
    <>
    <h2>Add a new person</h2>
    <form onSubmit={detailHandler} >
        <div>
            Name: <input type='text' value={newName} onChange={(event) => setNewName(event.target.value) } />
        </div>
        <div>
            Number: <input type='number' value={newNumber} onChange={(event) => setNewNumber(event.target.valueAsNumber) } />
        </div>
        <p>
          <button type="submit">Add</button>
        </p>
    </form>
    </>
  )
}

export default Persons