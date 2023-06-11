import React from 'react'
import Head from 'next/head'

export const  getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()

    const paths = data.map(({id}) => ({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false,
    }
  }

  export const  getStaticProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
  
    if (!data){
      return {
        notFound: true
      }
    }
  
    return {
      props: {
        post: data,
      }
    }
  }


const Post = ({post}) => {

  return (
    <div>
        <Head><title>Post</title></Head>

        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
    </div>
  )
}

export default Post