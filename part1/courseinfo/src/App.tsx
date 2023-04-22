import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"
import { useState } from "react"

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <>{counter}</>
    </div>
  )
}

export default App