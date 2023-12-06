import {useState} from "react"
import {Routes, Route,Navigate} from "react-router-dom"
import NavBar from "./componentes/navbar"
import Inicio from "./Paginas/Inicio"
import VerUsuarios from "./paginas/usuarios/VerUsuarios"
import VerUsuario from "./paginas/usuarios/VerUsuario"
import CrearUsuario from "./paginas/usuarios/CrearUsuario"
import { useAuth } from "./UseAuth.jsx";
import Login from "./paginas/Login"
import VerCategorias from "./paginas/categorias/VerCategorias"
import CrearCategoria from "./paginas/categorias/CrearCategoria"
import LogoutUsuario from "./componentes/LogoutUsuario"
import VerPublicaciones from "./paginas/publicaciones/VerPublicaciones"
import VerPublicacion from "./paginas/publicaciones/VerPublicacion"
import CrearPublicacion from "./paginas/publicaciones/CrearPublicacion"
import VerCategoria from "./paginas/categorias/VerCategorias"

function RutaProtegidaLogeado({children}) {
  const {usuarioLogeado, cargando} = useAuth();
  if (cargando) {
    return "";
  }
  return usuarioLogeado.logeado ? (
  children
  ) : (
    <Navigate to="/login" state= {{alerta : "No estas logeado"}} />
  )
  }

  
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
<Route path= "/ver-categorias" element= {<VerCategorias/>}/>
<Route path= "/ver-categoria/:idCategoria" element= {<VerCategoria/>}/>
<Route path= "/crear-categoria" element= {<CrearCategoria/>}/>
<Route path= "/ver-publicaciones" element= {<VerPublicaciones/>}/>
<Route path= "/crear-publicacion" 
element= {
<RutaProtegidaLogeado>
<CrearPublicacion usuarioLogeado={usuarioLogeado}/>
</RutaProtegidaLogeado>
}/>


<Route path= "/ver-publicaciones/:idPublicacion" element= {<VerPublicacion/>}/>


  </Routes>
  </>
}

export default App