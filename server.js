import express from 'express'

const app = express()
const porta = 3000

app.get('/', (req, res) => {
  res.send('Servidor Node.js com Express funcionando!')
})

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})