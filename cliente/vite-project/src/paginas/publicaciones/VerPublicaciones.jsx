import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../../componentes/Card"


function VerPublicaciones () {
    const [publicaciones, setPublicaciones] = useState([{}])

    async function cargarPublicaciones () {
        const response = await fetch("http://localhost:3000/publicaciones")
        const data = await response.json()
        console.log(data)
        setPublicaciones(data)
    
    }

    useEffect(() => {
        cargarPublicaciones()
    }, [])
        const contenido = publicaciones.map ((publicaciones) => {
            return( <Card
            key= {`${publicaciones._id}`}
            titulo = {publicaciones.tittle}
            textoCard = {publicaciones.text}
            autor = {publicaciones.autor}
            categoria = {publicaciones.categoria}
            textoBoton = "Ver publicación"
            linkBoton = {`/ver-publicaciones/${publicaciones._id}`}
            />
            )
        })
        
    return (
        <>
            <h1>Publicaciones</h1>  <Link to="/crear-publicacion" className="btn btn-primary">Nueva publicación</Link> <br></br>
            {contenido}
        </>
    );
} 


export default VerPublicaciones