// set up port and dbURI


const port = process.env.PORT || 4000
const dbURI = process.env.MONGODDB_URI || 'mongodb://localhost/restful-api'
const secret = process.env.SECRET || 'open sesame'

module.exports = { port, dbURI, secret }