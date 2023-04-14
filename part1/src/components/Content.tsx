import Part from './Part'
import part from '../types/parts.type'

const Content = ({parts}: {parts: part[]}) => {

  return (
    <>
    {parts.map((part: part) => <Part key={part.name} part={part.name} exercise={part.exercises} />)}
    </>
  )
}

export default Content;