const Escala = require('../models/Escala');
// const parseStringAsArray = require('..//utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const {dia, local} = request.query;
        // const techsArray = parseStringAsArray(techs);
        const escalas = await Escala.find({
            dia: /{$dia}/i
            , local,
            // location: {
            //     $near: {
            //         $geometry: {
            //             type: 'Point',
            //             coordinates: [longitude, latitude],
            //         },
            //         $maxDistance: 10000,
            //     }
            // }
        });
        return response.json({escalas});
    },
};