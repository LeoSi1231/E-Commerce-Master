const routerUsuarios = require("express").Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    usuarioLogeado,
    loginUsuario,
    logoutUsuario,
    errorLogin,
} = require("../controllers/usuario");

const catchAsync = require("../utils/catchAsync");
const {validarUsuario} = require("../validations/validations");
const passport = require("passport");
const {estaLogeado,esUsuario,esAdmin} = require("../middlewares");

routerUsuarios
    .route("/")
    .get(catchAsync(verUsuarios))
    .post(validarUsuario, catchAsync(crearUsuario));

routerUsuarios.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/usuarios/error-login",
    }),
    catchAsync(loginUsuario)    
    );

    routerUsuarios.get("/logout", catchAsync(logoutUsuario));
    routerUsuarios.get("/usuario-logeado", catchAsync(usuarioLogeado));
    routerUsuarios.post("/error-login", catchAsync(errorLogin));

    routerUsuarios
    .route("/:id")
    .put(estaLogeado,esUsuario,catchAsync(editarUsuario))
    .delete(estaLogeado,esAdmin,catchAsync(eliminarUsuario))
    .get(catchAsync(verUsuario))
    


module.exports = routerUsuarios;