const express = require('express');
const routes = express.Router();

const { getUserRepoByUsername, getUserInfoByUsername, getRepoInfoByName, getMainInfoByUsername } = require('../controllers/githubController');

routes.get('/repos/:username', getUserRepoByUsername);
routes.get('/user/:username', getUserInfoByUsername);
routes.get('/repos/:username/:repository', getRepoInfoByName);
routes.get('/main', getMainInfoByUsername);

module.exports = routes;