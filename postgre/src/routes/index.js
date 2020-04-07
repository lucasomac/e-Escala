const { Router } = require('express');
const EscalaController = require('../controller/EscalaController');
const MinistroController = require('../controller/MinistroController');

const routes = Router();
/* GET home page. */
routes.get('/', (req, res) => {
    res.send({ message: 'Endpoint Working - API Sucefull!' });
});

routes.get('/escalas', EscalaController.index);
routes.get('/ministros', MinistroController.index);

module.exports = routes;

