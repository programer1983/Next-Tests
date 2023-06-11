import React from 'react'

const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}
  
    if (!contact){
         return <h1>Empty Contact</h1>
    }
  
    return (
    <>
        <h2>{name}</h2>
        <div>
            <strong>Email: {email}</strong>
        </div>
        <div>
            <strong>Address: {`${street}, ${suite}, ${city}, ${zipcode}`}</strong>
        </div>
    </>
  )
}

export default ContactInfo  