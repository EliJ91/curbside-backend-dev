const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

exports.registerUser = async (req, res, next) => {
  const { restaurant, email, password } = req.body
  try {
    let createdUser = await User.findOne({
      email: req.body.email
    })
    if (createdUser) {
      res.status(422).json({
        errors: [
          {
            msg: 'User already exists'
          }
        ]
      })
    } else {
      createdUser = new User({
        restaurant,
        email,
        password
      })
      const salt = await bcrypt.genSalt(10)

      createdUser.password = await bcrypt.hash(password, salt)

      await createdUser.save().then((User) => {
        jwt.sign({ id: User.id }, config.get('jwtSecret'), (err, token) => {
          if (err) throw err
          res.status(201).json({
            token,
            user: {
              id: User.id,
              email: User.email
            }
          })
        })
      })
    }
  } catch (err) {
    next(err)
  }
}
