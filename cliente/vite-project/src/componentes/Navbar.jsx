import {NavLink } from "react-router-dom"

function NavBar ({usuarioLogeado}) {

  const linksLogeado = () => {
    return (
      <>
    <li className="nav-item">
    <NavLink 
    to ={`/ver-usuario/${usuarioLogeado.usuario._id}`} className="nav-link">{usuarioLogeado.usuario.nombre}</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to ="/logout" className="nav-link">Desconectarse</NavLink>
    </li>
    </>
    )
  }

  const linksDeslogeado = () => {
    return(
    <>
    <li className="nav-item">
      <NavLink to ="/login" className="nav-link">Iniciar Sesion</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to ="/registrarse" className="nav-link">Registrarse</NavLink>
    </li>
    </> 
    )
  }

    return ( <nav
    className="navbar navbar-expand-lg "
    style={{ backgroundColor: "#fff159" }}>
  <div className="container-fluid">
    <NavLink to ="/" className="navbar-brand" >E-Commerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to ="/" className="nav-link ">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/ver-usuarios" className="nav-link">Usuarios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/ver-categorias" className="nav-link">Categorias</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/ver-publicaciones" className="nav-link">Publicaciones</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {usuarioLogeado.logeado ? linksLogeado() : linksDeslogeado()}

      </ul>
      
    </div>
    
  </div>
</nav>
 
    )}

export default NavBar
