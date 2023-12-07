import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"




function CrearPublicacion ({usuarioLogeado}) {
    const navigate = useNavigate();
    const [publicacion, setPublicacion] = useState({
        tittle: "",
        text: "",
        categoria: ""
        
    })
    const [categorias, setCategorias] = useState([{}])

    function manejarInputs(evento) {
        setPublicacion({...publicacion,
            [evento.target.name]: evento.target.value})
    }
    console.log(publicacion)    

    function enviarPeticion(evento) {
        evento.preventDefault()
        fetch("http://localhost:3000/publicaciones",{
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({...publicacion, autor: usuarioLogeado.usuario._id}),
        }).then((response) => {
            navigate("/")
            })
        }

        async function fetchCargarCategorias () {
            const response = await fetch("http://localhost:3000/categorias")
            const categoriasFetch = await response.json()
            setPublicacion((dataActual) => {
                return {...publicacion,
                categoria: categoriasFetch[0]._id}
            }) 
            setCategorias(categoriasFetch)
            console.log(categoriasFetch)
        }
        useEffect(() => {
            fetchCargarCategorias()
        }, [])


    const opciones = categorias.map((categoria) => {
        return <option key = {categoria._id} value = {categoria._id}>
            {categoria.nombre}
            </option>
    })
    

    return (
        <>
        <h1>Nueva Publicacion</h1>
        <form className="row g-3">
  <div className="mb-2">
  <label htmlFor="inputCity" className="form-label">Titulo</label>
    <input type="text" 
        placeholder="tittle"
        value={publicacion.tittle} 
        onChange={manejarInputs} 
        name="tittle"/>
  </div>
  <div className="mb-2">
  <label htmlFor="inputState" className="form-label">text</label>
    <input type="text" 
        placeholder="Texto" 
        value={publicacion.text} 
        onChange={manejarInputs}
        name="text" />
  </div>
  <div className="mb-2">
  <label htmlFor="exampleInputPassword1" className="form-label">Categoria</label>
    <select
        name = "categoria"
        value = {publicacion.categoria}
        onChange = {manejarInputs}
        >
        {opciones}    
    </select>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={enviarPeticion}>Crear</button>
  </div>
</form>
        </>
    )
}
export default CrearPublicacion