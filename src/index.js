import React from 'react';
import ReactDOM from 'react-dom';

const Header = (head) => {
  return(
    <>
    <h1>{head.name}</h1>
    </>
  )
}

const Content = (prop) => {
  return(
    <>
    <Part name={prop.parts.name} exercise={prop.parts.exercises}/> 
    </>
  )
}
//1.1 , 1.2
const Part = (par) => {
  return(
    <>
    <p>{par.name} {par.exercise}</p>
    </> 
  )
}


/*const Total = (tot) => {
  return(
    <>
    <p>Number of exercises {tot.parts[0].exercises + tot.parts[1].exercises + tot.parts[2].exercises}</p>
    </>
  )
}*/

const Course = (props) => {
    return (
      <>
      <Header name={props.course.name} />
      <Content parts = {props.course.parts} />
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
