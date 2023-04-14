import course from "../types/course.type";

const Header = ({course}: {course: course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

export default Header;