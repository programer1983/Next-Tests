import React from 'react'

const Person = ({person}) => {
  return (
    <div>
        <h2>{person.first_name}</h2>
        <h3>{person.last_name}</h3>
        <p>{person.email}</p>

    </div>
  )
}

export default Person