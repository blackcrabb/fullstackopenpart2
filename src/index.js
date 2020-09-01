import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // const [show, setShow] = useState("")

  const handleChange = (event) => {
   setNewName(event.target.value);
  };
  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }

  // const handleSearch = (event) => {
    // setShow(event.target.value);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result= persons.find(({name}) => name===newName)
     if(result !== undefined)
     { 
       alert(`${newName} is already added to phonebook`)
    }
     else
     {
      setPersons(persons.concat({ name: newName , number: newNumber}));
      setNewName(""); 
      setNewNumber(""); 
     }
     
  };
  

  return (
    <div>
      <h1>Phonebook</h1>
      
        <div>
          {/* filter shown with <input */}
          {/* value={persons.name} */}
          {/* onChange={handleSearch}/> */}
        </div>
        <h2>add a new</h2>
  
      <h2>Numbers</h2>
      <br/>
        {persons.map(person => <li key={person.key}>{person.name} {person.number}</li>
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
