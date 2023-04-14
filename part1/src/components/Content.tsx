import Part from './Part'
import part from '../types/parts.type'
import course from '../types/course.type'

const Content = ({course}: {course: course}) => {

  return (
    <>
    {course.parts.map((part: part) => <Part key={part.name} part={part.name} exercise={part.exercises} />)}
    </>
  )
}

export default Content;