const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const usuarioSchema = new Schema({
    username: String,
    email: String,
    esAdmin : {type: Boolean, default: true},
    publicaciones: [{
        type: Schema.Types.ObjectId,
        ref: 'Publicacion'
    }],
    comentarios : [{
        type: Schema.Types.ObjectId,
        ref: 'Comentario'
    }]
   
    
})

usuarioSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('usuario', usuarioSchema)