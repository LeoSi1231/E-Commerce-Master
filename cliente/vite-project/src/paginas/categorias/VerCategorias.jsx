import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../../componentes/Card"


function VerCategorias () {
    const [categoria, setCategoria] = useState([{}])

    async function cargarCategorias () {
        const response = await fetch("http://localhost:3000/categorias")
        const data = await response.json()
        console.log(data)
        setCategoria(data)
    }

    useEffect(() => {
        cargarCategorias()
    }, [])
        const contenido = categoria.map ((categoria) => {
            return( <Card
            key= {`${categoria._id}`}
            titulo = {categoria.nombre}
            textoCard = {categoria.descripcion}
            textoBoton = "Ver publicaciones"
            linkBoton = {`/categoria/${categoria._id}`}
            />
            )
        })
        
    return (
        <>
            <h1>Ver Categorias</h1>  <Link to="/crear-categoria" className="btn btn-primary">Crear Categorias</Link> <br></br>
            {contenido}
        </>
    );
}
export default VerCategorias