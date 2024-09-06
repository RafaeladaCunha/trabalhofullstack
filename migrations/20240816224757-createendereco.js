'use strict';


module.exports = {
 up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('endereco', {
    id: {
      type: Sequelize.INTEGER,
      primarykey: true,
      autoIncrement: true,
      allowNull: false,
    }, cep:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    Logradouro:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    Numero:{
      type:Sequelize.INTEGER,
      allowNull: false,
    },
    complemento: {
      type:Sequelize.STRING,
    }, 
    Bairro:{
      type: Sequelize.STRING,
      allowNull: false,

    },
    cidade:{
      type: Sequelize.STRING,
      allowNull: false,
    },
      Estado:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      MunicipioIBGE:{
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) =>{
  await queryInterface.dropTable('enderecos');
  }
};