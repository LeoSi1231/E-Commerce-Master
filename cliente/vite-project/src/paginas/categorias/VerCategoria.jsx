import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Card from "../../componentes/Card"

function VerCategoria() {
    const {idCategoria} = useParams()
    const [categoria, setCategoria] = useState({
        publicaciones :[]
    })

    async function cargarCategoria () {
        const datos = await fetch(`http://localhost:3000/categorias/${idCategoria}`)
        const data = await datos.json()
        setCategoria(data)
    }
    useEffect(() => {
        cargarCategoria()
    }, [])
    
    const contenido = categoria.publicaciones.map ((publicacion) => {
        return( <Card
        key= {`${publicacion._id}`}
        titulo = {publicacion.tittle}
        textoCard = {publicacion.text}
        textoBoton = "Ver publicacion"
        linkBoton = {`/ver-publicaciones/${publicacion._id}`}
        />
        )
    })


    return (
        <div>
           {contenido}
            
        </div>
    );
}

export default VerCategoria