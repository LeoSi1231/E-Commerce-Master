import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import NavBar from "./componentes/navbar"
import Inicio from "./paginas/Inicio"
import Usuarios from "./paginas/verUsuarios/verUsuarios"
 
function App() {
  return <>
  <NavBar/>
  <Routes>
<Route path="/.paginas/inicio" element={<Inicio/> }/>
<Route path= "/.paginas/VerUsuarios/verUsuarios" element={<verUsuarios/>}/>

  </Routes>
  </>
}

export default App