const express = require('express')
const app = express()
const port = 3000

// cria a rota padrão
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

// escutar a porta 3000
app.listen(port, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${port}`)
})
