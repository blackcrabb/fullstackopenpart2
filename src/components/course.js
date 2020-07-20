import React from 'react';

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

  export default Course