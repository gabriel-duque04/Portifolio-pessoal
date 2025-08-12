const { getUserRepo, getUserInfo, getRepoInfo } = require('../services/githubServices.js');

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

async function getUserInfoByUsername(req,res){
    const username = req.params.username;
    try {
        const user = await getUserInfo(username);
        res.json(user);
    } catch (error) {
        console.error('Erro na API GitHub:', error);
        res.status(500).json({ error: error.message });
    }
}

async function getRepoInfoByName(req,res){
    const repository = req.params.repository
    const username = req.params.username

    try {
        const repo = await getRepoInfo(username,repository);
        res.json(repo);
    } catch (error) {
        console.error('Erro na API GitHub:', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {getUserRepoByUsername, getUserInfoByUsername, getRepoInfoByName};