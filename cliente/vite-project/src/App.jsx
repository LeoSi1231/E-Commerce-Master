import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import NavBar from "./componentes/navbar"
import Inicio from "./Paginas/Inicio"
import VerUsuarios from "./paginas/usuarios/VerUsuarios"
import VerUsuario from "./paginas/usuarios/VerUsuario"
import CrearUsuario from "./paginas/usuarios/CrearUsuario"
import { useAuth } from "./UseAuth.jsx";
import Login from "./paginas/Login"
import VerCategoria from "./paginas/categorias/VerCategoria"
import LogoutUsuario from "./componentes/LogoutUsuario"


 
function App() {
  const {usuarioLogeado, setUsuarioLogeado} = useAuth();
  return <>
  <NavBar usuarioLogeado={usuarioLogeado}/>
  <Routes>
<Route path="/" element= {<Inicio/> }/>
<Route path= "/ver-usuarios" element= {<VerUsuarios/>}/>
<Route path= "/registrarse" element= {<CrearUsuario/>}/>
<Route path= "/ver-usuario/:idUsuario" element= {<VerUsuario/>}/>
<Route path= "/login" element= {<Login setUsuarioLogeado={setUsuarioLogeado}/>}/>
<Route path="/logout" element={<LogoutUsuario setUsuarioLogeado={setUsuarioLogeado}/>}/>
<Route path= "/ver-categorias" element= {<VerCategoria/>}/>


  </Routes>
  </>
}

export default App