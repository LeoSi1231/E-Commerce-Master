const comentario = require('../models/comentario');
const Usuario = require('../models/usuario');
const Publicacion = require('../models/publicacion');



const crearComentario = async (req, res) => {
    const { publicacion, autor, texto } = req.body;
    const Comentario = new comentario({ publicacion, autor, texto });
    await Publicacion.findByIdAndUpdate(publicacion, {
        $push: { comentarios: Comentario._id }
    })
    await Usuario.findByIdAndUpdate(autor, {
        $push: { comentarios: Comentario._id }
    })
    await Comentario.save();
    res.json({ msg: 'Comentario creado', Comentario });
}

const editarComentario = async (req, res) => {
    const { id } = req.params;
    const {texto } = req.body;
    const Comentario = await comentario.findByIdAndUpdate(id, {texto });

    res.json({ msg: 'Comentario actualizado', Comentario });
    
}

const eliminarComentario = async (req, res) => {
    const { id } = req.params;
    const Comentario = await comentario.findByIdAndDelete(id);
    await Publicacion.findByIdAndUpdate(Publicacion, {
        $pull: { comentarios: Comentario._id }
    })
    await Usuario.findByIdAndUpdate(autor, {
        $pull: { comentarios: Comentario._id }
    })
    res.json({ msg: 'Comentario eliminado', Comentario });
}

module.exports = {
    crearComentario,
    editarComentario,
    eliminarComentario,

}
