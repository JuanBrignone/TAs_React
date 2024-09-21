import React, { useState } from "react";


export const TaskList = () =>{
    const [tasks, setTasks] = useState([]) //se inicializa el array vacio, sin tareas agregadas
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) =>{
        setInputValue(event.target.value) //Accede al valor actual del input y actualiza el estado de inputValue
    }

    const addTask = () =>{
        if(inputValue.trim()){ // el .trim elimina espacios vacios o en blanco al principio y al final de la cadena
            setTasks([...tasks, inputValue]) //Añade el nuevo valor a la lista tasks
            setInputValue("") // limpia el input para que quede vacio luego de añadir una tarea
        }
    }

    const deleteTask = ()=>{
        if (tasks.length > 0){ //verifica si la cadena no esta vacia
            tasks.pop() //remueve la ultima tarea agregada directamente del array de tareas
            setTasks([...tasks]) //actualiza la lista sin la ultima tarea, con una nueva version del array
        }
    }

    return(
        <div>
            <h2>Task List </h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="New Task"
            />

            <button onClick={addTask}>Add Task</button>
            <button onClick={deleteTask}>Delete Task</button>

            <ul>
                {tasks.map((task, index)=> (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}