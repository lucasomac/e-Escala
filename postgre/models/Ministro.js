const Sequelize = require('sequelize');
const database = require('../Database');
const Model = Sequelize.Model;
class Ministro extends Model {  };
Ministro.init({
    // attributes
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: database,
    timestamps: false,
    modelName: 'ministro'
    // options
});
Ministro.readAll = async (req, res) => {
    try {
        const ministros = await Ministro.findAll();
        return res.send({ ministros });
    } catch (error) {
        return res.send(error);
    }
};

module.exports = Ministro;