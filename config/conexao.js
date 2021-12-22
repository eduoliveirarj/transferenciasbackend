const mysql = require('mysql')
const conexao = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'fiscal22',
    port:3306,
    database: 'db_contabancaria'
})

conexao.connect((erro)=>{
    if(erro)throw erro
    console.log("Estamos conectados ao Banco de Dados")
})


module.exports = conexao
