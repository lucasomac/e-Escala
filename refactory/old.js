const dotenv = require('dotenv');
dotenv.config();
// const Ministro = require('./models/Ministro');
// Option 1: Passing parameters separately
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_database, process.env.DB_user, process.env.DB_pass, {
    host: process.env.DB_host,
    dialect: process.env.DB_dialect,

});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const Model = Sequelize.Model;
class Ministro extends Model { }
Ministro.init({
    // attributes
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'ministro'
    // options
});
// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

Ministro.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return Minsitro.create({ nome: 'John' }.then(John => { console.log("John's auto-generated ID:", jane.id); }));
});
