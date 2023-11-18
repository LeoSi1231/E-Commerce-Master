import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import NavBar from "./componentes/navbar"
import Inicio from "./paginas/Inicio"
import VerUsuarios from "./paginas/usuarios/verUsuarios"
import VerUsuario from "./paginas/usuarios/VerUsuario"
import CrearUsuario from "./paginas/usuarios/CrearUsuario"

 
function App() {
  return <>
  <NavBar/>
  <Routes>
<Route path="/" element= {<Inicio/> }/>
<Route path= "/ver-usuarios" element= {<VerUsuarios/>}/>
<Route path= "/registrarse" element= {<CrearUsuario/>}/>
<Route path= "/ver-usuario/:idUsuario" element= {<VerUsuario/>}/>


  </Routes>
  </>
}

export default App