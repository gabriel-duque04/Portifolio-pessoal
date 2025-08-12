require('dotenv').config();

const token = process.env.GITHUB_TOKEN;

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

module.exports = { getUserRepo};