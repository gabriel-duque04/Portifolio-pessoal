//importando o necessário
require('dotenv').config();
console.log(process.env.GITHUB_USER);
const express = require('express');



//configuração de porta e inicialização do express
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}, http://localhost:${port}/`);
})


//rotas
const githubRoutes = require('./routes/githubRoutes');
app.use('/', githubRoutes);


