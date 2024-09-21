import React, { useState } from "react"

export const AppearText = () =>{

    const [appearText, setAppearText] = useState(true)

    const appear = () =>{
        setAppearText(!appearText) //Alterna el valor entre true or false para que aparezca o desaparezca el texto 
    }

    return(
        <div>
            <h2>Aparecer y Desaparecer Texto</h2>
            <p>{appearText ? "Texto de ejemplo!" : ""}</p>  {/*Al apretar aparece el texto de ejemplo, sino un string vacio */}
            <button onClick={appear}>Apretame!</button>
        </div>
    )

}