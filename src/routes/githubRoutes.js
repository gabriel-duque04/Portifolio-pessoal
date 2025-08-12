const express = require('express');
const routes = express.Router();

const { getUserRepoByUsername } = require('../controllers/githubController');

routes.get('/repos/:username', getUserRepoByUsername);

module.exports = routes;