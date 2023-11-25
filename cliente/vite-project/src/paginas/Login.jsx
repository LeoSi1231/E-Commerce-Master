import {useState} from "react"
import {useNavigate} from "react-router-dom"



function Login ({setUsuarioLogeado}) {
    const [objUsuario, setObjUsuario] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    function manejarInputs(evento) {
        evento.preventDefault();
        setObjUsuario({...objUsuario,
            [evento.target.name]: evento.target.value})
    }

 const enviarLogin =(e) => {
        e.preventDefault();
        fetch("http://localhost:3000/usuarios/login",{
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(objUsuario),
        }).then((response) => {
            return response.json();
            })
            .then((data) => {
                console.log(data);
                setUsuarioLogeado(data);
                if (data.logeado){
                navigate("/");
                }
            })
        }
        
    return (
        <>
        <h1>Iniciar Sesion</h1>
        <form>
    <div className="mb-2">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="text" 
        placeholder="Email" 
        value={objUsuario.username} 
        onChange={manejarInputs }
        name="username" />
    
    </div>
    <div className="mb-2">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="text" 
        placeholder="Contraseña" 
        value={objUsuario.password} 
        onChange={manejarInputs}
        name="password"
        />
    </div>
    <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={enviarLogin}>Iniciar Sesion</button>
  </div>

        </form>
        </>
    )
} 

export default Login