const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const mushroomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  scientificName: { type: String, required: true },
  edible: { type: Boolean, required: true },
  image: { type: String, require: true },
  description: { type: String, required: true, maxlength: 500
  },
  comment: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Mushroom', mushroomSchema)

