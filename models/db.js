const Sequelize = require('sequelize');
require('dotenv').config();
//const marker = require('./marker');

    // Conexão com Banco de Dados MySQL
        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: "localhost",
            dialect: "postgres"
        });

    // Teste de conexão com o banco
        sequelize.authenticate().then(() => {             
            console.log('Conectado com sucesso!');
        }).catch((error) => {
            console.log('Falha ao se conectar' + error);
        })

    // Functions de inserção no banco
        async function saveMarker(req, res){
            const {titulo, descricao, lat, lng} = req.body;
            console.log(titulo + descricao+lat+lng);

            Marker.create({
               latitude: lat,
               longuitude: lng,
               titulo: titulo,
               descricao: descricao
            })
            
            res.status(200).send('inserido');
          }


    

module.exports = {
    sequelize: sequelize,
    saveMarker: saveMarker
}
