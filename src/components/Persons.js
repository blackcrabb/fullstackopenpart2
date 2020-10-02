import React from 'react';

const Persons = (prop) => {
    return(
        <div>
        {prop.persons.map(person => <li key={person.key}>{person.name} {person.number}</li>)}
        </div>
    )
}

export default Persons