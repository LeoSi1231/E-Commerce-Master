const routerPublicacion = require("express").Router();

const {
    verPublicaciones,
    verPublicacion,
    crearPublicacion,
    editarPublicacion,
    eliminarPublicacion
} = require("../controllers/publicacion");

const catchAsync = require("../utils/catchAsync");
const {validarPublicacion} = require("../validations/validations");
const {estaLogeado,esAutorPublicacion} = require("../middlewares");


routerPublicacion
    .route("/")
    .get(catchAsync(verPublicaciones))
    .post(estaLogeado,validarPublicacion,catchAsync(crearPublicacion));

routerPublicacion
    .route("/:id")
    .put(estaLogeado,esAutorPublicacion,catchAsync(editarPublicacion))
    .delete(estaLogeado,esAutorPublicacion,catchAsync(eliminarPublicacion))
    .get(catchAsync(verPublicacion));

module.exports = routerPublicacion;