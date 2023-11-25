import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function VerCategorias () {
    async function cargarCategorias () {
        const response = await fetch("http://localhost:3000/categorias")
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        cargarCategorias()
    }, [])

    return (
        <>
            <h1>Ver Categorias</h1>
        </>
    );
}
export default VerCategorias