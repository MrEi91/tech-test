'use strict'
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const app = express()

let map = require ('./routes/map')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:false
}))

app.use('/api', map)

app.listen(3000)
