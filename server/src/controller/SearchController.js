const database = require('../database');
module.exports = {
    async indexMinistroName(request, response) {
        const { name } = request.params;
        const id = await database('ministro').where('name', name).select('id');
        return response.json(id);
    },
    async indexMinistroId(request, response) {
        const { id } = request.params;
        const name = await database('ministro').where('id', id).select('name');
        console.log(name);
        return response.json(name);
    },
    async searchMinistro(name) {
        const [id] = await database('ministro').where('name', name).select('id');
        console.log("O Id do minsitro inserido é: " + id);
        return id;
    }
}