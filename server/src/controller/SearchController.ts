import database from "../database";
import {Request, Response} from "express";

export default {
    async indexMinistroName(request: Request, response: Response) {
        const {name} = request.params;
        const id = await database('ministro').where('name', name).select('id');
        return response.json(id);
    },
    async indexMinistroId(request: Request, response: Response) {
        const {id} = request.params;
        const name = await database('ministro').where('id', id).select('name');
        console.log(name);
        return response.json(name);
    },
    async searchMinistro(name: string) {
        const [id] = await database('ministro').where('name', name).select('id');
        console.log("O Id do minsitro inserido é: " + id);
        return id;
    }
};
