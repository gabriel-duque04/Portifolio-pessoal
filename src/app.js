//importando o necessário
require('dotenv').config();
const express = require('express');
const path = require('path');
const githubRoutes = require('./routes/githubRoutes');

//inicializa o express
const app = express();

//rota inicial
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//rotas

app.use('/api', githubRoutes);



//express para servir o frontend
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}, http://localhost:${port}/`);
});