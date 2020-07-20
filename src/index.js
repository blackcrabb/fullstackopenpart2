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
    {
      prop.parts.map((n)=>
        <Part key={n.key} part={n.name} exercise={n.exercises} />
      )}
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
      <div>
      {
        props.course.map((ex)=>
        <React.Fragment>
          <Header key={ex.id} name={ex.name} />
          <Content key={ex.id} parts = {ex.parts} />
          <Total key={ex.id} parts = {ex.parts}/>
        </React.Fragment>
         
        )
      }
      </div>
    )
}

const App = () => {
  const course = [
    {
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
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
