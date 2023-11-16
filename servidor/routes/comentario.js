const routerComentarios = require("express").Router();

const {
    crearComentario,
    editarComentario,
    eliminarComentario
} = require("../controllers/comentario");

const  catchAsync  = require("../utils/catchAsync");
const {validarComentario} = require("../validations/validations");
const {estaLogeado,esAutorComentario} = require("../middlewares");

routerComentarios
    .route("/:id")
    .put(estaLogeado,esAutorComentario,catchAsync(editarComentario))
    .delete(estaLogeado,esAutorComentario,catchAsync(eliminarComentario))
    
    

routerComentarios
    .route("/")
    .post(estaLogeado,validarComentario, catchAsync(crearComentario))
   

 module.exports = routerComentarios