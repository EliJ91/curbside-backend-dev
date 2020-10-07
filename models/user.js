const mongoose = require('mongoose')

const NewUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      owner: {
        type: Boolean,
        required: true
      }    
    })
    const userModel = mongoose.model('NewUsers', NewUserSchema)
    module.exports = userModel