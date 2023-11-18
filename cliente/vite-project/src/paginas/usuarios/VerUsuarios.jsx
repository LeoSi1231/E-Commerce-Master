import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function VerUsuarios () {
    const [usuarios, setUsuarios] = useState([{}])

    async function cargarUsuarios () {
        const response = await fetch('http://localhost:3000/usuarios')
        const data = await response.json()
        setUsuarios(data)
    }

    function cargarTabla() {
        const filas = usuarios.map ((usuario) => {
            return (
                <tr key= {`${usuario._id}`}>
                    <td>{usuario.id}</td>
                    <td>{usuario.username}</td>
                    <td>{usuario.email}</td>
                    <td>
                        <Link to = {`/ver-usuario/${usuario._id}`}>
                        <button>Ver Usuario</button>
                        </Link>
                    </td>
                </tr>
            )
        })
        return filas
    }

    useEffect(() => {
        cargarUsuarios();
        console.log(usuarios)
    }, [])
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Usuario</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>{cargarTabla()}</tbody>
        </table>
        </>
    )
    
    
}
export default VerUsuarios