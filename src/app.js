//importando o necessário
require('dotenv').config();
const express = require('express');
const path = require('path');



//configuração de porta e inicialização do express
const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}, http://localhost:${port}/`);
})


//rotas
const githubRoutes = require('./routes/githubRoutes');
app.use('/api', githubRoutes);



//express para servir o frontend
app.use(express.static(path.join(__dirname, 'public')));