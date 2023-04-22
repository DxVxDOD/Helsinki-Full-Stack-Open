import React from 'react'
import part from '../types/parts.type'
import course from '../types/course.type'

const Total = ({course}: {course: course}) => {
  return (
    <p>
        Number of exercises:
        {course.parts.map((part: part) => part.exercises).reduce((partA, partB) => partA + partB, 0)}
    </p>
  )
}

export default Total