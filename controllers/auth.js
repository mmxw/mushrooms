const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
      console.log(token)
      res.status(202).json({ message: `welcome back, ${user.username}`, token })
    })
    .catch(() => res.status(401).json({ message: 'unauthorized' }))
}

module.exports = { register, login }