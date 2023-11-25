import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function VerUsuario() {
    const {idUsuario} = useParams()
    const [usuario, setUsuario] = useState({})

    async function cargarUsuario () {

        const datos = await fetch(`http://localhost:3000/usuarios/${idUsuario}`)
        const data = await datos.json()
        setUsuario(data)
    }
    useEffect(() => {
        cargarUsuario()
    }, [])

    return (
        <>
        <h1>Ver Usuario</h1>
        <h2>Id: {idUsuario}</h2>
        <h3>Nombre: {usuario.nombre}</h3>
        <h3>Apellido: {usuario.apellido}</h3>
        <h3>Email: {usuario.email}</h3>
        </>
    )
}

export default VerUsuario