import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [allClicks, setAll] = useState([]) 
 
  //var i=0;

  const handleNameChange = (event) => {
    console.log(event.target.value)
  //  setAll(allClicks.concat(event.target.value))
    setPersons(event.target.value)
  //  i++
  }

//  const addName = (event) => {
   
//console.log(allClicks)
//setPersons(event.target.value)
 //   console.log("added");
    //i++;
//}

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input 
         value={persons.name}
         onClick={handleNameChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <br/>
        {allClicks.join(' ')}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
