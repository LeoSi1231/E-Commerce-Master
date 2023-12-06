function VerCategoria() {
    const {idCategoria} = useParams()
    const [categoria, setCategoria] = useState({})

    async function cargarCategoria () {
        const datos = await fetch(`http://localhost:3000/publicaciones/${idPublicacion}`)
        const data = await datos.json()
        setPublicacion(data)
    }
    useEffect(() => {
        cargarPublicacion()
    }, [])
    


    return (
        <div>
            <h1>Ver Categorias</h1>
        </div>
    );
}