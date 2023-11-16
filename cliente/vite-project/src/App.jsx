import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import NavBar from "./componentes/navbar"
import Inicio from "./Paginas/Inicio"
import Usuarios from "./Paginas/Usuarios"
 
function App() {
  return <>
  <NavBar/>
  <Routes>
<Route path="/Inicio" element={<h1>TITULO</h1> }/>
<Route path= "/Usuarios" element={<button>BOTON</button>}/>

  </Routes>
  </>
}

export default App