const Sequelize = require('sequelize');
const database = require('../database');

const Ministro = database.define(
    'ministros',
    {
        nome: {
            type: Sequelize.STRING(20)
        }
    },
    { timestamps: false }
);

Ministro.readAll = async (req, res) => {
    try {
        const ministros = await Ministro.findAll();
        return res.send({ ministros });
    } catch (error) {
        return res.send(error);
    }
};

module.exports = Ministro;