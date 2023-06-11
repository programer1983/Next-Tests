import React from "react"
import Head from 'next/head'
import Link from "next/link"


export const  getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  if (!data){
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts: data,
    }
  }
}


export default function Posts({posts}) {


  return (
    <div className="main-container">
      <Head>
        <title>Posts</title>
      </Head>

      <Link className="users-link link-user"  href="/">Go to Home</Link>
      
      <h1 className="users-title">Posts List</h1>
      <div>
        <ul className="posts-list">
           {posts.map((post) => (
             <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
             </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
