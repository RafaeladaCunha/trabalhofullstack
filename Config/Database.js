module. exports ={
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Renata',
    database: 'cadastropessoa',
    define:{
    timestamps:false,
    undefined:true,
    }
}
// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastropessoa', 'postgres', 'Renata', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;



