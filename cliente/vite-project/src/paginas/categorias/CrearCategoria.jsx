import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CrearCategoria () {

    const navigate = useNavigate();
    const [categoria, setCategoria] = useState([{}])

    function manejarInputs(evento) {
        setCategoria({...categoria,
            [evento.target.name]: evento.target.value})
    }
    console.log(categoria)

    function enviarPeticion(evento) {
        evento.preventDefault()
        fetch("http://localhost:3000/categorias",{
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(categoria),
        }).then((response) => {
            navigate("/")
            })
        }
    return (
        <>
        <h1>Crear Categoria</h1>
        <form className="row g-3">
    <div className="mb-2">
    <label htmlFor="inputCity" className="form-label">Nombre</label>
    <input type="text" 
        placeholder="Nombre"
        value={categoria.nombre} 
        onChange={manejarInputs} 
        name="nombre"/>
    </div>
    <div className="mb-2">
    <label htmlFor="inputState" className="form-label">Descripcion</label>
    <input type="text" 
        placeholder="Descripcion" 
        value={categoria.descripcion} 
        onChange={manejarInputs}
        name="descripcion" />
    </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={enviarPeticion}>Crear</button>
  </div>
    </form>
        </>
    );
}

export default CrearCategoria