import { useState} from 'react'

import './ToDoList.css'
export function ToDoList({ title, tasks }: any) {


    const [text, setText] = useState('')


    const[filter, setFilter] = useState('all')




    console.log(filter)
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input onChange={(event) => {
                    setText(event.currentTarget.value)
                }} />
                <button onClick={() => {
                    console.log("Add List Click Detectet.")
                }}>+</button>
            </div>
            <ul>
                {tasks.map((task: any) => {
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone} /> <span>{task.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => {
                        setFilter('all')
                    }}>All</button>
                <button
                    className={filter === 'active' ? 'active' : ''}
                    onClick={() => {
                        setFilter('active')
                    }}>Active
                </button>
                <button
                    className={filter === 'completed' ? 'active' : ''}
                    onClick={() => {
                        setFilter('completed')
                    }}>Completed
                </button>
            </div>
        </div >
    )
}