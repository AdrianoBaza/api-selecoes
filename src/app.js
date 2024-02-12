import express from 'express'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// mock
const selecoes = [
    {id: '1', selecao: 'Brasil', grupo: 'G'},
    {id: '2', selecao: 'Suíça', grupo: 'G'},
    {id: '3', selecao: 'Camarões', grupo: 'G'},
    {id: '4', selecao: 'Sérvia', grupo: 'G'}
]

// rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

// rota para listar todas as seleções
app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

// rota para cadastrar uma seleção
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app
