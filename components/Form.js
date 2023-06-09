import React from 'react'

const Form = ({create}) => {
    const [person, setPerson] = React.useState({first_name: "", last_name: "", email: ""})

    const addPerson = (e) => {
        e.preventDefault()
        const newPerson = {
            ...person,
            id: Date.now(),
        }
        create(newPerson)
        setPerson({first_name: "", last_name: "", email: ""})
    }
    
    
    return (
        <form onSubmit={addPerson} className="form-person">
            <input 
              value={person.first_name}
              onChange={(e) => setPerson({...person, first_name: e.target.value})}
              placeholder='Enter First Name'
            />
            <input 
              value={person.last_name}
              onChange={(e) => setPerson({...person, last_name: e.target.value})}
              placeholder='Enter Last Name'
            />
            <input 
              value={person.email}
              onChange={(e) => setPerson({...person, email: e.target.value})}
              placeholder='Email'
            />
            <button type='submit'>Add Person</button>
        </form>
  )
}

export default Form