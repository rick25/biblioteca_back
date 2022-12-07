const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/config')
const routes = require('./routes/v1')

const app = express()

dbConnection()

app.use('/api/v1', routes)

const port = process.env.PORT
app.listen(port, () => console.log(`Servidor corriendo en puerto ${ port }`))
