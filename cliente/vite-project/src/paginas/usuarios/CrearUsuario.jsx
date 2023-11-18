import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CrearUsuario () {
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })

    function manejarInputs(evento) {
        setUsuario({...usuario})
    }
    console.log(nombre)

    function enviarPeticion() {
        fetch("http://localhost:3000/usuarios",{
            method: "POST"
        })
    }

    return (
        <>
        <h1>Registrarse!</h1>
        <input
        type="text" 
        placeholder="Nombre"
        value={usuario.nombre} 
        onChange={manejarInputs} 
        name="nombre"/>

        <input 
        type="text" 
        placeholder="Apellido" 
        value={usuario.apellido} 
        onChange={manejarInputs}
        name="apellido"
        />

        <input 
        type="text" 
        placeholder="Email" 
        value={usuario.email} 
        onChange={manejarInputs }
        name="Email"
        />

        <input 
        type="text" 
        placeholder="Password" 
        value={usuario.password} 
        onChange={manejarInputs}
        name="Password"
        />
        <button onClick={}></button>
        </>
    )
}

export default CrearUsuario