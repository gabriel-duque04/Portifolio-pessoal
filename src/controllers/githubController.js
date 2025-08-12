const { getUserRepo } = require('../services/githubServices.js');

async function getUserRepoByUsername(req, res) {
    const username =  req.params.username;
    try {
        const response = getUserRepo(username);
        res.json(repos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

modeule.exports = {getUserRepoByUsername};