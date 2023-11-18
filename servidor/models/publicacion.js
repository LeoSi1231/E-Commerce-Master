const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicacionSchema = new Schema({
    tittle : String,
    text : String,
    autor : {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    categorias : {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    comentarios : [{
        type: Schema.Types.ObjectId,
        ref: 'Comentario',
        autor : {
            type: Schema.Types.ObjectId,
            ref: 'Usuario'
        },
    }]
    }
)

module.exports = mongoose.model('Publicacion', publicacionSchema)