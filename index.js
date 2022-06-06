const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models/db');
const createModelMarker = require('./models/marker');


// Create table in DataBase
    createModelMarker();

// Config

    // Template Engine 
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // body-parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());    

// Rotas
    app.get('/', (req, res)=>{
        res.render('maps.handlebars');
    })

    app.post('/addMarker', db.saveMarker);


// Definindo Porta
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.. Ctrl + C para derrubar...');
})

