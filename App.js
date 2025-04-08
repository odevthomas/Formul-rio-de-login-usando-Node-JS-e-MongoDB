const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com MongoDB Atlas
mongoose.connect('mongodb+srv://admin:lupfC6Yzj4b4goNc@cluster0.ghw1coh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch((err) => console.error('❌ Erro ao conectar:', err));

// Rotas
app.get('/', (req, res) => {
  res.send('🚀 API de Login está rodando!');
});

// Rota de registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('✅ Usuário registrado com sucesso!');
  } catch (error) {
    res.status(500).send('❌ Erro ao registrar usuário');
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('❌ Usuário não encontrado');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send('❌ Senha incorreta');

    res.send('✅ Login realizado com sucesso!');
  } catch (error) {
    res.status(500).send('❌ Erro ao realizar login');
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
