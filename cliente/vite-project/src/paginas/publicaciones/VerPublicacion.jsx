import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function VerPublicacion() {
    const {idPublicacion} = useParams()
    const [publicacion, setPublicacion] = useState({autor: {}, categoria: {}})

    async function cargarPublicacion () {
        const datos = await fetch(`http://localhost:3000/publicaciones/${idPublicacion}`)
        const data = await datos.json()
        setPublicacion(data)
    }
    useEffect(() => {
        cargarPublicacion()
    }, [])
    

    return (
        <>
        <h1>Publicación</h1>
        <h3>Titulo: {publicacion.tittle}</h3>
        <h3>Texto: {publicacion.text}</h3>
        <h3>Autor: {publicacion.autor.nombre}</h3>
        <h3>Categoria: {publicacion.categoria.nombre}</h3>
        {/* <h3>Comentarios: {publicacion.comentarios}</h3> */}
        </>
    )

    }
 

export default VerPublicacion

   
