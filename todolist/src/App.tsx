import React from 'react';
import './App.css';
import {ToDoList} from './ToDoList'

export function App() {
    const tasks_1 = [
        {
            id:1, 
            title:"html",
            isDone:false
        },
        {
            id:2, 
            title:"js",
            isDone:false
        },
        {
            id:3, 
            title:"css",
            isDone:true
        },
        {
            id:4, 
            title:"python",
            isDone:true
        },
        {
            id:5, 
            title:"powershell",
            isDone:true
        }
    ]
    return (
        <div className="App">
            <ToDoList title={"Roblox"} tasks={tasks_1}/>
            <ToDoList title={"Minecraft"} tasks={tasks_1}/>
        </div>
    );
}

