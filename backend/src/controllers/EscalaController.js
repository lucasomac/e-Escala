// const axios = require('axios');
const Escala = require('../models/Escala');
// const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const escalas = await Escala.find();
        return response.json(escalas);
    },
    async store(request, response) {
        const {dia, local, ministros} = request.body;
        let escala = await Escala.findOne({dia});
        if (!escala) {
            escala = await Escala.create({
                    dia,
                    local,
                    ministros,
                }
            )
        }
        return response.json(escala);
    },
    async update(request, response) {
        const {dia, local, ministros} = request.query;
        let escala = await Escala.upsert({dia},
            {
                $set: {local, ministros, dia},
                upsert: true,
                useFindAndModify: true,
            });
        return response.json(escala);
    }
    ,
    async destroy(request, response) {
        const {dia} = request.query;
        let escala = await Escala.findOneAndDelete({dia});
        console.log(escala);
        return response.json(escala);
    }
}
;