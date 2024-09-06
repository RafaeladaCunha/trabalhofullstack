// models/Pessoa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const Pessoa = sequelize.define('Pessoa', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Pessoa;


