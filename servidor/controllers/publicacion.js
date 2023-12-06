const categoria = require('../models/categoria');
const Publicacion = require('../models/publicacion');
const Usuario = require('../models/usuario');
const Categoria = require('../models/categoria');

const verPublicaciones = async (req, res) => {
    const publicaciones = await Publicacion.find();
    res.json(publicaciones);
}

const verPublicacion = async (req, res) => {
    const { id } = req.params;
    const publicacion = await Publicacion.findById(id).populate('autor').populate({
        path: 'comentarios', populate: 'autor' })
        .populate('categoria');
    res.json(publicacion);
}

const crearPublicacion = async (req, res) => {
    const { tittle, text, autor,categoria, } = req.body;
    const publicacion = new Publicacion({ tittle, text, autor,categoria, });
    await publicacion.save();
    await Usuario .findByIdAndUpdate(autor, { $push: { publicaciones: publicacion._id } });
    await Categoria.findByIdAndUpdate(categoria, { $push: { publicaciones: publicacion._id } });

    res.json({msg: 'Publicacion creada',publicacion});
    
}

const editarPublicacion = async (req, res) => {
    const { id } = req.params;
    const { title, text, autor,categoria, } = req.body;
    const publicacion = await Publicacion.findByIdAndUpdate(id, {
         title,
          text, 
          autor,
          categoria, });
    
    for (var i = 0; i < categoria.length; i++) {
        await categoria.findByIdAndUpdate(categoria[i],
             { $push: { publicaciones: publicacion._id } });
    }

    for (var i = 0; i < categoria.length; i++) {
        await categoria.findByIdAndUpdate(categoria[i],
             { $pull: { publicaciones: publicacion._id } });
    }
    res.json({msg: 'Publicacion actualizada', publicacion});
}

const eliminarPublicacion = async (req, res) => {
    const { id } = req.params;
    const publicacion = await Publicacion.findByIdAndDelete(id);
    await Usuario .findByIdAndUpdate(autor, 
        { $pull: { publicaciones: publicacion._id } });

    await categoria.updateMany(publicacion.categoria,{
        $pull: { publicaciones: publicacion._id }
    });
        
    res.json({ msg: 'Publicacion eliminada', publicacion});
}


module.exports = {
    verPublicaciones,
    crearPublicacion,
    verPublicacion,
    editarPublicacion,
    eliminarPublicacion
}

    