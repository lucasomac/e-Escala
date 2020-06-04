const database = require('../database');
const SearchController = require('./SearchController');
const MinistroController = require('./MinistroController');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {

    async create(request, response) {

        const { data, horario, local } = request.body;
        const ministros = parseStringAsArray(request.body.ministros);
        var inserts = [];
        for (var index in ministros) {
            var { id } = await SearchController.searchMinistro(ministros[index]);
            console.log(id);
            inserts.push(await database('escala').returning('id').insert({
                data, horario, local, ministro: id
            }));
        }
        return response.json(inserts);
    },
    async index(request, response) {
        const escalas = await database('escala').select('*').orderBy(['data', 'horario']);
        return response.json(escalas);
    }
};
