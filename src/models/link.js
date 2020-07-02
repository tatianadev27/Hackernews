const mongoose = require('mongoose')
const linkSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  changedAt: {
    type: Date,
    default: Date.now
  }
})
const Link = mongoose.model('Link', linkSchema)
module.exports = Link
