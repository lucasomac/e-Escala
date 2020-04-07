const database = require('../database');
module.exports = {
    async create(request, response) {
        const { name, telefone } = request.body;
        await database('ministro').insert({
            name, telefone
        });
        return response.json({
            id
        });
    },
    async index(request, response) {
        const ministros = await database('ministro').select('*');
        return response.json(ministros);
    },
    async search(request, response, name) {
        const id = await database('ministro').where('name', name).select('id');
        return response.json(id);
    }
};