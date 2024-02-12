import express from 'express'

const app = express()

// cria a rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

export default app
