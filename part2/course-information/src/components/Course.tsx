import courseType from '../types/course.type'
import Content from './Content'
import Header from './Header'

const Course = ({courses}: {courses: courseType[]}) => {
  return (
    <>
      {courses.map((course: courseType) => 
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
          </div> 
        )}
    </>
  )
}

export default Course