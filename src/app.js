const express = require('express')
const morgan = requiere('morgan')

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use(require('./routes/task.routes.js'))

module.exports = app