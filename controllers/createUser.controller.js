const UserRegistration = require('../models/user')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res, next) => {
  const {email, password, admin} = req.body
  try {
    let createdUser = await UserRegistration.findOne({
      email
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
      createdUser = new UserRegistration({
        email,
        password,
        admin
      })
      const salt = await bcrypt.genSalt(10)

      createdUser.password = await bcrypt.hash(password, salt)

      await createdUser.save()
      res.status(201).json(req.body)
    }
  } catch (err) {
    next(err)
  }
}
