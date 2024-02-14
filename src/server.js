import app from './app.js'

const PORT = 3000

 // escutar a porta 3000
 app.listen(PORT, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${PORT}`)
})
