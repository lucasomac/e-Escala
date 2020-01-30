const mongoose = require('mongoose');

const EscalaSchema = new mongoose.Schema({
    dia: String,
    horario: String,
    local: String,
    ministros: [String],
});

module.exports = mongoose.model('Escala', EscalaSchema);