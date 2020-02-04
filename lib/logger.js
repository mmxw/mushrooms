function logger(req, res, next) {
  console.log(`incoming method ${req.method} to ${req.url}`)
  next()
}

module.exports = logger


