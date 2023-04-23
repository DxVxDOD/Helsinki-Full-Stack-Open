const Part = ({name, exercises}: {name: string, exercises: number}) => {
  return (
    <li>{name} {exercises}</li>
  )
}

export default Part