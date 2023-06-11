import React from 'react'
import Head from 'next/head'
import ContactInfo from '../../components/ContactInfo'

export const  getServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
  
    if (!data){
      return {
        notFound: true
      }
    }
  
    return {
      props: {
        contact: data,
      }
    }
  }


const User = ({contact}) => {



  return (
    <div>
        <Head><title>User</title></Head>

        <ContactInfo contact={contact}/>
    </div>
  )
}

export default User