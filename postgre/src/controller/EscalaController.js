const database = require('../database');
const MinistroController = require('./MinistroController')
module.exports = {

    // async create(request, response) {
    //     const { name, telefone, name } = request.body;
    //     const ministro_id = MinistroController.search(name);
    //     await database('escala').insert({
    //         name, telefone, ministro_id
    //     });
    // },
    async index(request, response) {
        const escalas = await database('escala').select('*');
        return response.json(escalas);
    }
};
