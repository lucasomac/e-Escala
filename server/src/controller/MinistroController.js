const database = require('../database');
module.exports = {
    async create(request, response) {
        const { name, phone } = request.body;
        const [id] = await database('ministro').insert({
            name: name, phone: phone
        }, "id");
        return response.json({
            id
        });
    },
    async index(request, response) {
        const ministros = await database('ministro').select('*');
        return response.json(ministros);
    },
    async update(request, response) {
        const { id, phone } = request.body;
        const ministros = await database('ministro').update({
            phone
        }).where('id', id);
        return response.json(ministros);
    },

};