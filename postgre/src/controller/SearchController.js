const database = require('../database');
const json = require('json');
module.exports = {
    async indexMinistro(request, response) {
        const { name } = request.params;
        const id = await database('ministro').where('name', name).select('id');
        console.log(id);

        return response.json(id);
    },
    async searchMinistro(name) {
        const  [id]  = await database('ministro').where('name', name).select('id');
        console.log("O Id do minsitro inserido é: " + id);
        return id;
    }
}