import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
   setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 2.7
    const result= persons.find(({name}) => name===newName)
    console.log(result)
     if(result !== undefined)
     { 
       alert(`${newName} is already added to phonebook`)
    }
     else
     {
      setPersons(persons.concat({ name: newName }));
      setNewName(""); 
     }
     
  };
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input id="insi"
          value={persons.name}
           onChange={handleChange}
            />
        </div> 
        <div> 
          <button type="submit" >add</button>
        </div> 
      </form>
      <h2>Numbers</h2>
      <br/>
      
        {persons.map(person => <li key={person.key}>{person.name}</li>
        )}
      
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
