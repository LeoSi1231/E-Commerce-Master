const Categoria = require('../models/categoria');

const verCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
}

const verCategoria = async (req, res) => {
    const { id } = req.params;
    const categoria = await Categoria.findById(id).populate('publicaciones');
    res.json(categoria);
}

const crearCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const categoria = new Categoria({ nombre, descripcion });
    await categoria.save();
    res.json({msg: 'Categoria creada',categoria});
}

const editarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const categoria = await Categoria.findByIdAndUpdate(id, { nombre });
    res.json({msg: 'Categoria actualizada', categoria});
}

const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    const categoria = await Categoria.findByIdAndDelete(id);
    await Publicacion.findManyAndUpdate(
        { categoria: id },
        { $pull: { categoria: id } }
    );
    res.json({ msg: 'Categoria eliminada', categoria});
    
}

module.exports = {
    verCategorias,
    crearCategoria,
    verCategoria,
    editarCategoria,
    eliminarCategoria
}
