import {Router} from "express";
import EscalaController from "../controller/EscalaController";
import MinistroController from "../controller/MinistroController";
import SearchController from "../controller/SearchController";

const routes = Router();
/* GET home page. */
routes.get('/', (request, response) => {
    response.send({message: 'Endpoint Working - API Sucefull!'});
});
/* Rotas para a entidade ministro */
routes.get('/ministros', MinistroController.index);
routes.post('/ministros', MinistroController.create);
routes.get('/byName/:name', SearchController.indexMinistroName);
routes.get('/byId/:id', SearchController.indexMinistroId);
routes.put('/ministros', MinistroController.update);
/* Rotas para a entidade escala */
routes.get('/escalas', EscalaController.index);
routes.post('/escalas', EscalaController.create);
export default routes;

/**
 *Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) --> request.query
 * Route Params: Parâmentros utilizados para identificar recursos EX: /users/:1 --> request.params
 * Request Body: Corpo da requisição, utlizado para criar ou alterar recursos --> request.body
 **/
