const db = require('./db');
const Sequelize = require('sequelize');

const Marker = db.sequelize.define('marcadores', {
    titulo: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    },
    longuitude: {
        type: Sequelize.TEXT
    },
    latitude: {
        type: Sequelize.TEXT
    }
})


 
async function createTable(){
    await db.sequelize.sync();
}

createTable();


//Marker.sync({force: true});
module.exports = createTable;



