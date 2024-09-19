import React, { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const sum = () =>{
        setCounter(counter + 1)
    }

    const rest = () =>{
        if (counter > 0)
            setCounter(counter - 1)

    }

    return(
        <div>
            <h2>Contador</h2>
            <p>{counter}</p>
            <button onClick={sum}>Sumar</button>
            <button onClick={rest}>Restar</button>
        </div>
    )
}