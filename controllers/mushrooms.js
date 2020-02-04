const Mushroom = require('../models/mushroom')

function index(req, res) {
  Mushroom
    .find()
    .then(foundMushrooms => res.status(200).json(foundMushrooms))
    .catch(err => console.log(err))
} 

function create(req, res) {
  Mushroom
    .create(req.body)
    .then(createdMushroom => res.status(201).json(createdMushroom))
    .catch(err => console.log(err))
}

function show(req, res) {
  Mushroom
    .findById(req.params.id)
    .then(mushroom => res.status(202).json(mushroom))
    .catch(err => console.log(err))
}

function update(req, res, next) {
  Mushroom
    .findById(req.params.id)
    .then(mushroom => {
      if (!mushroom) return res.status(404).json({ message: 'not found' })
      Object.assign(mushroom, req.body)
      mushroom.save()
    })
    .then(mushroom => res.status(202).json(mushroom))
    .catch(next)
}

function remove(req, res) {
  Mushroom
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

module.exports = { index, create, show, update, remove }