const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text : String,
    puntuacion : Number,
    autor : {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    publicacion : {
        type: Schema.Types.ObjectId,
        ref: 'Publicacion'
    }
    }
)

module.exports = mongoose.model('Comentario', commentSchema)