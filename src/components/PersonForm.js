import React from 'react';

const PersonForm = (prop) => {
    return(
        <form onSubmit={prop.handleSubmit}>
        <div>
          name: <input
          value={persons.name}
           onChange={handleChange}
            />
            <br/>
            number: <input
          value={persons.number}
           onChange={handleNumber}
            /> 
        </div> 
        <div> 
          <button type="submit" >add</button>
        </div> 
      </form>
    )
}