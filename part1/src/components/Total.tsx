import React from 'react'
import part from '../types/parts.type'

const Total = ({parts}: {parts: part[]}) => {
  return (
    <p>
        Number of exercises:
        {parts.map((part: part) => part.exercises).reduce((partA, partB) => partA + partB, 0)}
    </p>
  )
}

export default Total