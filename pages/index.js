import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import headerimg from "./../public/img/header-img.jpg"
import {globalContext} from "./../context/Context"


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
      users: data,
    }
  }
}

export default function Home({users}) {
  const {isToggle, dispatch} = React.useContext(globalContext)

  function toggle(){
    dispatch({type: "TOGGLE"})
  }


  return (
    <div className="main-container"
          style={{backgroundColor: isToggle ? "black" : "", color: isToggle && "white"}} 
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Image width={250} height={150}src={headerimg} alt="preview"/>

      <button style={{marginTop: "10px"}} onClick={() => toggle()}>Change Color</button>

     <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}
