import React from 'react'

const Part = ({part, exercise}: {part: string, exercise: number}) => {
  return (
    <p>{part} {exercise}</p>
  )
}

export default Part