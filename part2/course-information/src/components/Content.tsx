import partType from "../types/part.type"
import Part from "./Part"

const Content = ({parts}: {parts: partType[]}) => {
    const exercises = parts.map((part: partType) => part.exercises);
    const initialValue = 0;
  return (
    <ul>
        {parts.map((part: partType) =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        <b>
            A total of {exercises.reduce((acumulator: number, currentValue: number): number => 
            acumulator + currentValue, initialValue)} exercises.
        </b>
    </ul>
  )
}

export default Content