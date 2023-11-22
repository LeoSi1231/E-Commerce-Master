import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Register from "../../componentes/Register";


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
            navigate("/usuarios")
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
        <button type="submit" onClick={enviarPeticion}>Registrarse</button>
        </>
    )
}

export default CrearUsuario