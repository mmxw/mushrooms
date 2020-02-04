const router = require('express').Router()

const mushrooms = require('../controllers/mushrooms')

const users = require('../controllers/auth')

const secureRoute = require('../lib/secureRoute')

router.route('/mushrooms')
  .get(mushrooms.index)
  .post(secureRoute, mushrooms.create)

router.route('/mushrooms/:id')
  .get(mushrooms.show)
  .put(secureRoute, mushrooms.update)
  .delete(secureRoute, mushrooms.remove)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router 
