export function ToDoList({ title, tasks }: any) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input onChange={(event)=>{
                    console.log(event.currentTarget.value)
                }}/>
                <button onClick={()=> {
                    console.log("Add List Click Detectet.")
                }}>+</button>
            </div>
            <ul>
                {tasks.map((task:any)=>{
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone} /> <span>{task.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
} 