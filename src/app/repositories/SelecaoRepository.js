import conexao from '../database/conexao.js'

class SelecaoRepository {

    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if(erro) return reject('Não foi possível Cadastrar')

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar')

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })        
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar')

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if(erro) return reject('Não foi possível atualizar')

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
    
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"  
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível apagar')

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

}

export default new SelecaoRepository()
