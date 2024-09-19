import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Card} from "./components/card";
import { InputInf } from "./components/InputInf";
import { Counter } from "./components/Counter";
import { AppearText } from "./components/AppearText";



function App() {

  return(
    <div className="App">

      <Card
        title = "Titulo 1"
        description = "Descripcion 1"
        asignedTo = "Juan"
        startDate={"16/09/2024"}
        endDate={"17/09/2024"} 
      />

      <Card
        title = "Titulo 2"
        description = "Descripcion 2"
        asignedTo = "Pepe"
        startDate={"16/09/2024"}
        endDate={"17/09/2024"} 
      />

      <Card
        title = "Titulo 3"
        description = "Descripcion 3"
        asignedTo = "Austin"
        startDate={"16/09/2024"}
        endDate={"17/09/2024"} 
      />

      <InputInf />

      <Counter />

      <AppearText />
      
    </div>
  )
}

export default App;
