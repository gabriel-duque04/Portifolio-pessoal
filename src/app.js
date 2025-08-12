require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

const githubRoutes = require('./routes/githubRoutes');

app.use('/', githubRoutes);


app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}, http://localhost:${port}/`);
})