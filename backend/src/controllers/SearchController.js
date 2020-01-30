const Escala = require('../models/Escala');

module.exports = {
    async index(request, response) {
        const {dia} = request.query;
        const escalas = await Escala.find({dia});
        return response.json({escalas});
    },
};