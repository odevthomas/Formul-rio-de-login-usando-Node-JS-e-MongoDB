# Formulário de Login com Node.js e MongoDB

Este é um projeto simples de autenticação de usuários, utilizando **Node.js**, **Express** e **MongoDB**, com criação de conta, login e verificação de credenciais.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (via Mongoose)
- EJS (para renderização das views)
- bcrypt (para hash de senhas)
- dotenv (variáveis de ambiente)

## 🧱 Funcionalidades

- Cadastro de usuário com nome, e-mail e senha
- Criptografia de senha com bcrypt
- Login com verificação de credenciais
- Estrutura básica de views com EJS

## 🧰 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (instalado localmente ou URI da Atlas)

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/odevthomas/Formul-rio-de-login-usando-Node-JS-e-MongoDB.git
cd Formul-rio-de-login-usando-Node-JS-e-MongoDB
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto e adicione:

```env
MONGO_URI=sua_string_de_conexao
PORT=3000
```

## ▶️ Executando o Projeto

```bash
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

## 📁 Estrutura do Projeto

```
├── views/             # Arquivos EJS (login, cadastro, home)
├── models/            # Schema do usuário
├── routes/            # Rotas de autenticação
├── .env               # Variáveis de ambiente
├── server.js          # Arquivo principal
```

## 📌 Observações

- Este projeto não possui autenticação com tokens ou sessões. Ideal para fins de aprendizado básico sobre autenticação com Node.js.
- Recomendado adicionar controle de sessões ou JWT em produção.

---
