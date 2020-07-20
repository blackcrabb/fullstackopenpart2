import React from 'react';
import ReactDOM from 'react-dom';

const Header = (head) => {
  return(
    <>
    <h1>{head.name}</h1>
    </>
  )
}

const Part = (par) => {
  return(
    <>
    <p>{par.part} {par.exercise}</p>
    </> 
  )
}

const Content = (prop) => {
  return(
    <>
      <Part part={prop.parts[0].name} exercise={prop.parts[0].exercises}/>
      <Part part={prop.parts[1].name} exercise={prop.parts[1].exercises}/>
      <Part part={prop.parts[2].name} exercise={prop.parts[2].exercises}/>
      <Part part={prop.parts[3].name} exercise={prop.parts[3].exercises}/>
    </>
  )
}

const Total = (tot) => {
  const total = tot.parts.reduce((sum, parts)=>{
    return sum + parts.exercises
  },0)
  return(
    <>
    <h3>total of {total} exercises</h3>
    </>
  )
}

const Course = (props) => {
    return (
      <>
      <Header name={props.course.name} />
      <Content parts = {props.course.parts} />
      <Total parts = {props.course.parts}/>
      </>
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
