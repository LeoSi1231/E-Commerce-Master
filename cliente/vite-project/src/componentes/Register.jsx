import { NavLink } from "react-router-dom";

function Register ({enviarPeticion, manejarInputs}) {
    return (
        <>
       <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail" className="form-label">Email</label>
    <input type="text" placeholder="Email" 
        value={usuario.email} 
        onChange={manejarInputs }
        name="Email" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Contraseña</label>
    <input type="text" 
        placeholder="Password" 
        value={usuario.password} 
        onChange={manejarInputs}
        name="Password"
        />
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Nombre</label>
    <input type="text" 
        placeholder="Nombre"
        value={usuario.nombre} 
        onChange={manejarInputs} 
        name="nombre"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Apellido</label>
    <input type="text" 
        placeholder="Apellido" 
        value={usuario.apellido} 
        onChange={manejarInputs}
        name="apellido" />
  </div>
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={enviarPeticion}>Registrarse</button>
  </div>
</form>
        </>
    )
}
export default Register