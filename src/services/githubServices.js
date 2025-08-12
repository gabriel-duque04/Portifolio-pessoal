require('dotenv').config();

const token = process.env.GITHUB_TOKEN;

async function getUserInfo(username){
    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers:{
            Authorization: `Bearer: ${token}`
        }
    });

    if(!response.ok){
        throw new Error(`Erro na requisição GitHub: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

async function getUserRepo(username){
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers:{
            Authorization: `Bearer: ${token}`
        } 
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição GitHub: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

async function getRepoInfo(username, repository){
    const response = await fetch(`https://api.github.com/repos/${username}/${repository}`, {
        headers: {
            Authorization: `Bearer: ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição GitHub: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

module.exports = { getUserRepo, getUserInfo ,getRepoInfo};
