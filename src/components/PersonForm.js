import React from 'react';

const PersonForm = (prop) => {
    return(
        <form onSubmit={prop.handleSubmit}>
        <div>
          name: <input
          value={prop.name}
           onChange={prop.handleChange}
            />
            <br/>
            number: <input
          value={prop.number}
           onChange={prop.handleNumber}
            /> 
        </div> 
        <div> 
          <button type="submit" >add</button>
        </div> 
      </form>
    )
}

export default PersonForm