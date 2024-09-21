import React, { useState } from "react";
import "./style_edit_button.css";
import "./editListTask_styles.css";

export const TaskList = () =>{
    const [tasks, setTasks] = useState([]) //se inicializa el array vacio, sin tareas agregadas
    const [inputValue, setInputValue] = useState("")
    const [editIndex, setEditIndex] = useState(null)
    const [editValue, setEditValue] = useState("")

    const handleChange = (event) =>{
        setInputValue(event.target.value) //Accede al valor actual del input y actualiza el estado de inputValue
    }

    const handleEditChange = (event) =>{
        setEditValue(event.target.value) //obtiene el valor del input de edit y lo actualiza en el array    
    }

    const addTask = () =>{
        if(inputValue.trim()){ // el .trim elimina espacios vacios o en blanco al principio y al final de la cadena
            setTasks([...tasks, inputValue]) //Añade el nuevo valor a la lista tasks
            setInputValue("") // limpia el input para que quede vacio luego de añadir una tarea
        }
    }

    const editTask = (index) =>{
        setEditIndex(index) //guarda el indice de la tarea que se esta editando
        setEditValue(tasks[index]) //pone el valor actual en el input de edicion
    }

    const saveTask = (index) =>{
        const updateTasks = [...tasks]
        updateTasks[index] = editValue //actualiza la tarea en la lista
        setTasks(updateTasks)
        setEditIndex(null) //sale de la edicion de la task
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
                    <li className="editList" key={index}>
                        {editIndex === index?(  //aca verifica si la tarea esta en modo edicion, si esto es asi muestra un input
                                               //en el cual se puede editar el titulo de la tarea, sino muestra el titulo normal
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={handleEditChange}
                                />
                                <button className="editButtonSave" onClick={()=>saveTask(index)}>Save</button>
                            </>
                        ) : (
                            <> 
                                {task}
                                <button className="editButton" onClick={()=> editTask(index)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}