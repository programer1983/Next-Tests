import React from "react"
import Head from 'next/head'
import Link from "next/link"


export const  getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  if (!data){
    return {
      notFound: true
    }
  }

  return {
    props: {
      persons: data,
    }
  }
}


export default function Users({persons}) {


  return (
    <div className="main-container">
      <Head>
        <title>Users</title>
      </Head>

      <Link className="users-link link-user"  href="/">Go to Home</Link>
      
      <h1 className="users-title">Users List</h1>
      <div>
        <ul className="persons-list">
           {persons.map((person) => (
             <li key={person.id}>
              <Link href={`/users/${person.id}`}>
                <h2>{person.name}</h2>
                <h3>{person.username}</h3>
                <p>{person.email}</p>
              </Link>
             </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
