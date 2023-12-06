import { useState } from "react"
import { useNavigate } from "react-router-dom"



function CrearPublicacion (usuarioLogeado) {
    const navigate = useNavigate();
    const [publicacion, setPublicacion] = useState({
        tittle: "",
        text: "",
        categoria: ""
        
    })

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
    <input type="text" 
        placeholder="Categorias" 
        value={publicacion.categoria} 
        onChange={manejarInputs}
        name="categoria"
        />
    </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={enviarPeticion}>Crear</button>
  </div>
</form>
        </>
    )
}
export default CrearPublicacion