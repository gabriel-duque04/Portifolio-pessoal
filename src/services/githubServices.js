require('dotenv').config();

const token = process.env.GITHUB_TOKEN;

async function getUserRepo(username){
    const response = fetch(`https://api.github.com/users/${username}/repos`, {
        headers:{
            Authorization: `Bearer: ${token}`
        } 
    });

    if(!response.ok){
        throw new Error(response.status);
    }

    const data = (await response).json;
    return data;
}

modeule.exports = { getUserRepo};