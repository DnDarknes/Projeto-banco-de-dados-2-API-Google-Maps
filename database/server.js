const { Connection } = require('pg/lib');
const {sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

var conexao = Connection.autheticate()
    .then(function(){
        console.log('Conexão com o Postgres foi estabelecido');
    })
    .catch(function(err){
        console.log('não foi possivel estabelecer conexão com o Postgres ');
    })
    .done();

module.exports = sequelize;