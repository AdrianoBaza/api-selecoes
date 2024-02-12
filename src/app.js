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

// função para buscar seleção por id
function buscarSelecaoPorID(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// função para pegar o índice do elemento no array seleções
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// rota para cadastrar uma seleção
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

// rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

// rota para listar todas as seleções
app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

// rota para listar seleção por ID
app.get('/selecoes/:id', (req, res) => {
    res.status(200).json(buscarSelecaoPorID(req.params.id))
})

// rota para atualizar seleção por ID
app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo
    res.json(selecoes[index])
})

// rota para deletar seleção por ID
app.delete('/selecoes/:id', (req, res) => {
    const index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.status(200).send(`Seleção com id ${req.params.id} excluída com sucesso`)
})

export default app
