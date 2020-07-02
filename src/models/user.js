import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
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
module.exports = mongoose.model('User', userSchema)
