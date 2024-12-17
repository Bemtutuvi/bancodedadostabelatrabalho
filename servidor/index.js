const express = require('express') //facilitar a criação das rotas do servidor
const app = express()
const cors = require('cors') //conectar html com a minha aplicação
const banco = require('./banco')

app.use(cors())

///a pagina inicial do servidor, abrir pagina dispara o get
///req é o q eu to enviando, minhas informações requisiçoes, res é o servidor enviando resposta com os dados
app.get('/', (req, res) => {
    res.send('Oi')
})

app.get('/alunos', async (req, res) => {
    const alunos = await banco.query('SELECT * from alunos')
    res.json(alunos)
})

///meu servidor(app) vai rodar na porta 3000 d vai rodar a função iniciar o servidor no endereço tal.
app.listen('3000', () => {
    console.log('Servidor inicializado no endereço http://localhost:3000')
})