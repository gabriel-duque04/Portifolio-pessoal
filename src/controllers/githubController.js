const { getUserRepo } = require('../services/githubServices.js');

async function getUserRepoByUsername(req, res) {
    const username =  req.params.username;
    try {
        const repos = await getUserRepo(username);
        res.json(repos);
    } catch (error) {
        console.error('Erro na API GitHub:', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {getUserRepoByUsername};