import database from "../database";
import SearchController from "./SearchController";
import parseStringAsArray from "../utils/parseStringAsArray";
import {Request, Response} from "express";

export default {
    async create(request: Request, response: Response) {

        const {data, horario, local} = request.body;
        const ministros = parseStringAsArray(request.body.ministros);
        var inserts = [];
        for (var index in ministros) {
            var {id} = await SearchController.searchMinistro(ministros[index]);
            console.log(id);
            inserts.push(await database('escala').returning('id').insert({
                data, horario, local, ministro: id
            }));
        }
        return response.json(inserts);
    },
    async index(request: Request, response: Response) {
        const escalas = await database('escala').select('*').orderBy(['data', 'horario']);
        return response.json(escalas);
    }
};
