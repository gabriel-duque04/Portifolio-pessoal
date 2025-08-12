const express = require('express');
const routes = express.Router();

const { getUserByUsername } = require('../routes/githubRoutes.js');

routes.get('/repos/:username', getUserByUsername);

modeule.exports = routes;