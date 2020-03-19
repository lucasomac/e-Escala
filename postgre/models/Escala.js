const Sequelize = require('sequelize');
const database = require('../Database');
const Ministro = require('./Ministro')
const Model = Sequelize.Model;
class Escala extends Model { };
Escala.init({
    data: {
        type: Sequelize.DATE,
    },
    horario: {
        type: Sequelize.TIME,

    },
    local: {
        type: Sequelize.STRING(50),

    },
    // ministro: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: Ministro,
    //         key: 'id'
    //     }
    // },
}, {
    sequelize: database,
    timestamps: false,
    modelName: 'escala'
}
);
// , { foreignKey: 'id' }
Escala.hasOne(Ministro);


Escala.readAll = async (req, res) => {
    try {
        const escalas = await Escala.findAll();
        return res.send({ escalas });
    } catch (error) {
        return res.send(error);
    }
};

Escala.read = async (req, res, id) => {
    try {
        const escalas = await Escala.findByPk(id);
        return res.send({ escalas });
    } catch (error) {
        return res.send(error);
    }
};

module.exports = Escala;