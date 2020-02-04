const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')
const router = require('./config/router')

const app = express()

mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) console.log(err)
    console.log('mongo is connected')
  }
)

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.listen(port, () => console.log(`express is running at port ${port}`))

