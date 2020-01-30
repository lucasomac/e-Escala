const mongoose = require('mongoose');
// const PointSchema = require('./utils/PointSchema');

const EscalaSchema = new mongoose.Schema({
    dia: Date,
    // horario: Date,
    local: String,
    ministros: [String],
    // location: {
    //     type: PointSchema,
    //     createIndexes: '2dsphere',
    // },
});

module.exports = mongoose.model('Escala', EscalaSchema);