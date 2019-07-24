const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, './app/public')))

app.use(express.urlencoded({extend: true}))
app.use(express.json())

require('./app/routing/apiRoutes') (app)

app.listen(process.env.PORT || 3000)