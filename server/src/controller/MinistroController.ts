import database from "../database";
import {Request, Response} from "express";

export default {
    async create(request: Request, response: Response) {
        const {name, phone} = request.body;
        const [id] = await database('ministro').insert({
            name: name, phone: phone
        }, "id");
        return response.json({
            id
        });
    },
    async index(request: Request, response: Response) {
        const ministros = await database('ministro').select('*');
        return response.json(ministros);
    },
    async update(request: Request, response: Response) {
        const {id, phone} = request.body;
        const ministros = await database('ministro').update({
            phone
        }).where('id', id);
        return response.json(ministros);
    },

};
