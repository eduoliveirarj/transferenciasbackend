require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())


const rotas = require('./rotas')
app.use('/banco',rotas)

app.listen(porta,()=>{
    console.log('Servidor está rodando')
})
