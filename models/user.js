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
      admin: {
        type: Boolean,
        required: true
      },
      restaurant: [
        {
          restaurantname: String,
          menuitems:
          [
            {
              name: String,
              description: String,
              allergies: String,
              price: Number,
              image: String,
              calories: Number,
              category: String
            }
          ]
        }
      ]
    
    })
    const userModel = mongoose.model('NewUsers', NewUserSchema)
    module.exports = userModel