import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// rota para cadastrar uma seleção
app.post('/selecoes', (req, res) => {
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (erro, resultado) => {
        const linha = resultado[0]
        if(erro) {
           res.status(404).json( {'erro': erro} )
        } else {
            res.status(201).json(resultado)
        }
    })
})

// rota para listar todas as seleções
app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (erro, resultado) => {
        if(erro) {
           res.status(404).json( {'erro': erro} )
        } else {
            res.status(200).json(resultado)
        }
    })
})

// rota para listar seleção por ID
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
        if(erro) {
           res.status(404).json( {'erro': erro} )
        } else {
            res.status(200).json(linha)
        }
    })
})

// rota para atualizar seleção por ID
app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao, id], (erro, resultado) => {
        const linha = resultado[0]
        if(erro) {
           res.status(404).json( {'erro': erro} )
        } else {
            res.status(200).json(resultado)
        }
    })
})

// rota para deletar seleção por ID
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        if(erro) {
           res.status(404).json( {'erro': erro} )
        } else {
            res.status(200).json(resultado)
        }
    })
})

export default app
