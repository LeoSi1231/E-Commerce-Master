import { useState, useEffect } from "react"


function Usuarios () {
    const [usuarios, setUsuarios] = useState([{}])

    async function cargarUsuarios () {
        const response = await fetch('http://localhost:3000/usuarios')
        const data = await response.json()
        setUsuarios(data)
    }

    useEffect(() => {
        cargarUsuarios();
        console.log(usuarios)
    })
    return 
    
    
}
export default Usuarios