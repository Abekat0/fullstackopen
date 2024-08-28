const App = () => {
  const course ={
    name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React', 
      exercises: 10
    },
    {
      name: 'Using props to pass data', 
      exercises: 7},
    {
      name: 'State of a component', 
      exercises: 14},
  ]
}

  return (
    <div>
      <Header info = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts =  {course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return(<h1>{props.info}</h1>)
}
const Content = (props) => {
  return(
    <div>
      <Part partTitle = {props.parts[0].name} noOfExercises = {props.parts[0].exercises}/>
      <Part partTitle = {props.parts[1].name} noOfExercises = {props.parts[1].exercises}/>
      <Part partTitle = {props.parts[2].name} noOfExercises = {props.parts[2].exercises}/>
    </div>
  )
}
const Part = (props) => {
  return( <p>{props.partTitle} {props.noOfExercises}</p>)

}
const Total = (props) => {
  let totalNoOfExercises = 0
  for (const parts of props.parts){
    totalNoOfExercises+=parts.exercises
  }
  return( <p>Number of exercises {totalNoOfExercises}</p>)
}

export default App