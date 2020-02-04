const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')
const { promisify } = require('util')

const verify = promisify(jwt.verify) 

async function secureRoute(req, res, next) {

  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) return res.status(401).json({ message: 'Unauthorized' })
  
  const token = req.headers.authorization.replace('Bearer ', '')

  try {
    const { sub: userId } = await verify(token, secret)
    const user = await User.findById(userId)
    if (!user) return res.status(401).json({ message: 'Unauthorized' })
    req.currentUser = user
    next()
  } catch {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

module.exports = secureRoute