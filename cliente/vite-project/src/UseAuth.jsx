import { createContext, useState, useEffect } from "react";
const AuthContent = createContext();

function useAuth() {
    
    const [usuarioLogeado, setUsuarioLogeado] = useState({
    logeado: false,
    usuario:{},
})
const [cargando, setCargando] = useState(true)

async function fetchUsuarioLogeado() {
    const respuesta = await fetch("http://localhost:3000/usuarios/usuario-logeado", 
    {
        credentials: "include",
    }
    )
    const usuario = await respuesta.json();
    setUsuarioLogeado(usuario);
    setCargando(false);
};

useEffect(() => {
    fetchUsuarioLogeado();
}, []);

return {
    usuarioLogeado,
    setUsuarioLogeado,
    cargando,
     
    };
}

export {useAuth};