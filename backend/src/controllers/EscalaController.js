const Escala = require('../models/Escala');
module.exports = {
    //Lista todas as escalas
    async index(request, response) {
        const escalas = await Escala.find();
        return response.json(escalas);
    }, //Insere escala
    async store(request, response) {
        let {dia, local, ministros, horario} = request.body;
        let escala = await Escala.findOne({dia, horario});
        if (!escala) {
            escala = await Escala.create({
                    dia, horario, local, ministros,
                }
            )
        }
        return response.json(escala);
    }, //Atualiza escala
    async update(request, response) {
        const {dia, local, ministros} = request.query;
        let escala = await Escala.upsert({dia},
            {
                $set: {local, ministros, dia},
                upsert: true,
                useFindAndModify: true,
            });
        return response.json(escala);
    },//Deleta escala
    async destroy(request, response) {
        const {dia, horario} = request.query;
        let escala = await Escala.findOneAndDelete({dia, horario});
        console.log(escala);
        return response.json(escala);
    }
}
;