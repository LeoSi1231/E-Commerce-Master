import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



function LogoutUsuario({setUsuarioLogeado}) {
    async function desconectarUsuario () {
        fetch("http://localhost:3000/usuarios/logout",{
            credentials: "include",
        }).then((response) => {
            return response.json();
            })
            .then((data) => {
                setUsuarioLogeado(data);
            })
    }

    useEffect(() => {
        desconectarUsuario();
    }, [])


    return (
        <>
        <h1>Te desconectaste!</h1>
        </>
    )
}
  
export default LogoutUsuario