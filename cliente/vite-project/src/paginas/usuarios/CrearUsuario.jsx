import { useState } from "react"
import { useNavigate } from "react-router-dom"



function CrearUsuario () {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })

    function manejarInputs(evento) {
        setUsuario({...usuario,
            [evento.target.name]: evento.target.value})
    }
    console.log(usuario)

    function enviarPeticion(evento) {
        evento.preventDefault()
        fetch("http://localhost:3000/usuarios",{
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(usuario),
        }).then((response) => {
            navigate("/")
            })
        }
    

    return (
        <>
        <h1>Registrarse!</h1>
        <form className="row g-3">
  <div className="mb-2">
  <label htmlFor="inputCity" className="form-label">Nombre</label>
    <input type="text" 
        placeholder="Nombre"
        value={usuario.nombre} 
        onChange={manejarInputs} 
        name="nombre"/>
  </div>
  <div className="mb-2">
  <label htmlFor="inputState" className="form-label">Apellido</label>
    <input type="text" 
        placeholder="Apellido" 
        value={usuario.apellido} 
        onChange={manejarInputs}
        name="apellido" />
  </div>
  <div className="mb-2">
  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="text" 
        placeholder="Email" 
        value={usuario.email} 
        onChange={manejarInputs }
        name="email" />
    
  </div>
  <div className="mb-2">
  <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="text" 
        placeholder="Contraseña" 
        value={usuario.password} 
        onChange={manejarInputs}
        name="password"
        />
   
  </div>
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={enviarPeticion}>Registrarse</button>
  </div>
</form>
        </>
    )
}
 
    


export default CrearUsuario

