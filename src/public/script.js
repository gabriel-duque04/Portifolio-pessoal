
//FUNÇÃO PARA PEGAR OS DADOS DO BACKEND
async function fetchGitHub() {
    //pega os dados e armazena nas variáveis
    const response = await fetch('/api/main');
    const data = await response.json();

    //preenche a div do perfil 
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
        <img src="${data.userData.avatar_url}" alt="Avatar">
        <div>
            <p class = 'nome'><strong>${data.userData.name}</strong> (@${data.userData.login})</p>
            <p>${data.userData.bio || ''}</p>
            <p>${data.userData.email || ''}</p>
            <p>Seguidores: ${data.userData.followers || ''}</p>
            <p>Seguindo: ${data.userData.following || ''}</p>
            <p>${data.userData.location || ''}</p>
        </div>
    `;

    //preenche a div dos repositorios
    const reposDiv = document.getElementById('repos');
    data.reposData.forEach(repo => {
        const repoEl = document.createElement('div');
        repoEl.className = 'repo-card';
        repoEl.innerHTML = `
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>${repo.description || 'Sem descrição'}</p>
        `;
        reposDiv.appendChild(repoEl);
    });
}

//chamada da função
fetchGitHub();