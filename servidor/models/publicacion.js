const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicacionSchema = new Schema({
    tittle : String,
    text : String,
    autor : {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    categoria : {
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    comentarios : [{
        type: Schema.Types.ObjectId,
        ref: 'Comentario',
        autor : {
            type: Schema.Types.ObjectId,
            ref: 'usuario'
        },
    }]
    }
)

module.exports = mongoose.model('Publicacion', publicacionSchema)