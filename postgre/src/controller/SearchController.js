const database = require('../database');
module.exports = {
    async index(request, response) {
        const { name } = request.params;
        const id = await database('ministro').where('name', name).select('id');
        return response.json(id);
    }
}