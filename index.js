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

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
app.listen(port, () => console.log(`express is running at port ${port}`))

