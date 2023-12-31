import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import TasksOage from "../components/TasksPage"

export default function Home() {
  const tasks1 = [
    {id:1,first_name:"Sigvard",last_name:"Richter",email:"srichter0@mail.ru", isDone: true},
    {id:2,first_name:"Pete",last_name:"Heggs",email:"pheggs1@indiegogo.com", isDone: true},
    {id:3,first_name:"Cairistiona",last_name:"Blumson",email:"cblumson2@liveinternet.ru", isDone: false},
    {id:4,first_name:"Bertine",last_name:"Howett",email:"bhowett3@wired.com", isDone: false},
    {id:5,first_name:"Carolann",last_name:"Didball",email:"cdidball4@vk.com", isDone: false},
  ]

  const tasks2 = [
    {id:1,first_name:"Antons",last_name:"Latek",email:"alatek5@sphinn.com", isDone: true},
    {id:2,first_name:"Ephrayim",last_name:"Stutte",email:"estutte6@usa.gov", isDone: false},
    {id:3,first_name:"Dru",last_name:"Burchard",email:"dburchard7@tripadvisor.com", isDone: true},
    {id:4,first_name:"Hanni",last_name:"Marriage",email:"hmarriage8@nsw.gov.au", isDone: false},
    {id:5,first_name:"Yoshiko",last_name:"Abrahamsen",email:"yabrahamsen9@dailymail.co.uk", isDone: true},
  ]

  return (
    <div className="main-container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="tasks">
        <TasksOage title="Team 1" tasks={tasks1}/>
        <TasksOage title="Team 2" tasks={tasks2}/>
      </div>
    </div>
  )
}
