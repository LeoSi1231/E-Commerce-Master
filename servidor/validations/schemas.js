const Joi = require('joi');
const usuarioSchema = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    publicaciones: Joi.array(),
    comentarios: Joi.array(),
    password: Joi.string().required(),
})

const publicacionSchema = Joi.object({
    titulo: Joi.string().required(),
    texto: Joi.string().required(),
    autor: Joi.string().required(),
    categorias: Joi.array(),
    comentarios: Joi.array(),
})

const comentarioSchema = Joi.object({
    publicacion: Joi.string().required(),
    autor: Joi.string().required(),
    texto: Joi.string().required(),
    puntuacion: Joi.number(),
})

const categoriaSchema = Joi.object({
    nombre: Joi.string().required(),
    publicaciones: Joi.array(),
})

module.exports = {
    usuarioSchema,
    publicacionSchema,
    comentarioSchema,
    categoriaSchema
};
