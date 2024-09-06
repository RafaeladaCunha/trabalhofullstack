// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./Config/database');
const Pessoa = require('./models/Pessoa');



const app = express();
app.use(cors());

app.use(bodyParser.json());

// Sincronizar banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });

    app.get('/', (req, res) => {
        res.send('Servidor está funcionando');
    });

// Rota para cadastro de pessoas
app.post('/pessoas', async (req, res) => {
    try {
        const pessoa = await Pessoa.create(req.body);
        res.status(201).json(pessoa);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao cadastrar pessoa.' });
    }
});

app.get('/pessoas', async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.json(pessoas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar pessoas' });
    }
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

    
});

