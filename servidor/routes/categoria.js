const routerCategoria = require("express").Router();

const {
    verCategorias,
    verCategoria,
    crearCategoria,
    editarCategoria,
    eliminarCategoria
} = require("../controllers/categoria");

const catchAsync = require("../utils/catchAsync");
const {validarCategoria} = require("../validations/validations"); 
const {estaLogeado, esAdmin} = require("../middlewares");

routerCategoria
    .route("/")
    .get(catchAsync(verCategorias))
    .post(estaLogeado,esAdmin,validarCategoria,catchAsync(crearCategoria));

routerCategoria
    .route("/:id")
    .put(estaLogeado,esAdmin,catchAsync(editarCategoria))
    .delete(estaLogeado,esAdmin,catchAsync(eliminarCategoria))
    .get(catchAsync(verCategoria));

module.exports = routerCategoria;
