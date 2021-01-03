import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios';

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("")
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);


  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
    setFilteredperson(
      persons.filter((person) =>
        person.name.includes(event.target.value.toLowerCase())
      )
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = persons.find(({ name }) => name === newName)
    if (result !== undefined) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      let tempper = setPersons(persons.concat({ name: newName, number: newNumber }));
      setPersons(tempper)
      setFilteredperson(tempper)
      setNewName("");
      setNewNumber("");
    }

  };


  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setFilteredPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <Filter filter={filter} handleFilter={handleFilter} />
      </div>
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} name={persons.name} handleChange={handleChange} number={persons.number} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <br />
      <Persons persons={filteredperson} />

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
