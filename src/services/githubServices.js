require('dotenv').config();

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USER;
console.log(username);
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

async function getMainInfo(){
    const [responseUser, responseRepos] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
        fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    ]);
    
    if (!responseUser.ok || !responseRepos.ok) {
        throw new Error(`Erro na requisição GitHub: ${responseUser.status} ${responseUser.statusText} ou  ${responseRepos.status} ${responseRepos.statusText} `);
    }

    const userData = await responseUser.json();
    const reposData = await responseRepos.json();

    return {userData, reposData};
}

module.exports = { getUserRepo, getUserInfo ,getRepoInfo, getMainInfo};
