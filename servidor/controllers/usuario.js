const Usuario = require('../models/usuario')
const Publicacion = require('../models/publicacion')
const Comentario = require('../models/comentario')

const verUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

const verUsuario = async (req, res) => {
    const  id  = req.params.id;
    const usuario = await Usuario.findById(id).
    populate('publicaciones').populate('comentarios');
    res.json(usuario);
}

const crearUsuario = async (req, res) => {
    const { nombre, email, apellido, password} = req.body;
    const usuario = new Usuario({
         nombre, email, apellido, username:email, password 
        });
    const nuevoUsuario = await Usuario.register(
        usuario, req.body.password
        );

        req.login(nuevoUsuario, (err) => {
            if (err){
                 return next(err);
        }})

    res.json({
        msg: 'Usuario creado',nuevoUsuario
    });
}

const editarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, password} = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, { nombre, email, password});
    res.json({
        msg: 'Usuario actualizado',
        usuario
    });
}

const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);
    const publicacion = await Publicacion.deleteMany({ autor: id});
    const comentario = await Comentario.deleteMany({ autor: id});
    res.json({ msg: 'Usuario eliminado', usuario
    });
}

const loginUsuario = async (req, res) => {
    const { username } = req.body;
    const usuario = await Usuario.findOne({ username });
    res.json({logeado: true, usuario: usuario});
}

const logoutUsuario = async (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
    });
    res.json({
        msg: 'Usuario desconectado'
    })
};

const usuarioLogeado = async (req, res) => {
    if (req.user) {
        res.json({logeado:true, usuario: req.user});
    } else {
        res.json({msg: 'No hay usuario logeado'});
    }
};

const errorLogin = async (req, res) => {
    res.status(401).json({ error: true,
        msg: 'Usuario o contraseña incorrectos'
    })
}


module.exports = {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    loginUsuario,
    logoutUsuario,
    usuarioLogeado,
    errorLogin

}