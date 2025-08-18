# Portfólio Pessoal 🚀

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

Um **portfólio pessoal** em Node.js com **Express**, integrando a **GitHub API** para exibir perfil e repositórios do usuário.

---

## 🔹 Funcionalidades

- Exibir informações do usuário GitHub (`/api/user/:username`)  
- Listar repositórios do usuário (`/api/repos/:username`)  
- Exibir informações combinadas do perfil e repositórios (`/api/main`)  
- Frontend estático com HTML, CSS e JS  
- Deploy gratuito no **Render Free**  

---

## 🔹 Tecnologias

- Node.js  
- Express  
- Fetch API  
- GitHub API  
- HTML / CSS / JavaScript  

---

## 🔹 Variáveis de Ambiente

Crie um arquivo `.env`:

GITHUB_TOKEN=seu_token_github

GITHUB_USER=seu_usuario_github


> Não versionar o `.env` no GitHub.

---

## 🔹 Executando Localmente

```bash
git clone https://github.com/gabriel-duque04/Portifolio-pessoal.git

cd Portifolio-pessoal

npm install

node src/app.js

Acesse: http://localhost:3000
``` 


## 🔹 Deploy

O projeto está disponível no **Render Free**:

https://portifolio-pessoal-gabriel-duque.onrender.com/


## 🔹 Estrutura do Projeto
```bash
Portifolio-pessoal/
├─ src/
│  ├─ app.js
│  ├─ routes/githubRoutes.js
│  └─ controllers/githubController.js
├─ services/githubServices.js
├─ public/
│  ├─ index.html
│  └─ (CSS/JS)
├─ .env
└─ package.json
```


👤 Autor

**Gabriel Duque**
