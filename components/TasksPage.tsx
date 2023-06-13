import { type } from 'os'
import React from 'react'

export type Task = {
  id: number
  first_name: string
  last_name: string
  email: string
  isDone: boolean
}

type Props = {
  title: string
  tasks: Task[]
}

const TasksPage = (props: Props) => {


    
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <input />
        <button>*</button>
      </div>
      <ul className='tasks__list'>
        {props.tasks.map((task) => (
           <li key={task.id}><input type='checkbox' checked={task.isDone}/>
              <h2 className='title__task'>{task.first_name}</h2>
              <h3>{task.last_name}</h3>
              <p>{task.email}</p>
           </li>
        ))}
      </ul>
    </div>
  )
}

export default TasksPage