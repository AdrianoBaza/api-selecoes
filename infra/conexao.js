import mysql from 'mysql'

const conexao = mysql.createConnection( {
    host: 'localhost',
    port: '3306',
    user: "******",
    password: "*******",
    database: 'bd-api-selecoes'
})

export default conexao
