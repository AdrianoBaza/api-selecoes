import express from 'express'

const app = express()

// mock
const selecoes = [
    {id: '1', selecao: 'Brasil', grupo: 'G'},
    {id: '2', selecao: 'Suíça', grupo: 'G'},
    {id: '3', selecao: 'Camarões', grupo: 'G'},
    {id: '4', selecao: 'Sérvia', grupo: 'G'}
]

// cria a rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

// lista todas as seleções
app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

export default app
