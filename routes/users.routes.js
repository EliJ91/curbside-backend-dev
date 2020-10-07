const express = require('express');
const router = express.Router();
const newUserController = require('../controllers/createUser.controller')
const loginUserController = require('../controllers/loginUser.controller')

//CREATE NEW USER
router.post('/user/create', newUserController.createUser)
router.post('/user/login', loginUserController.loginUser)


module.exports = router






// //get one
// router.get('/:id', (req,res)=>{
//     res.send(req.params.id)
// })
// //create one
// router.post('/', async (req,res)=>{
//     const user = new User({
//         email: req.body.email,
//         password: req.body.password,
//         adminAccount: req.body.adminAccount
//     })
//     try{
//         const newUser = await user.save()
//         res.status(201).json(newUser)
//     }catch (err){
//         res.status(400).json({message: err.message})
//     }
// })
// //update one
// router.patch('/:id', (req,res)=>{
    
// })
// //delete one
// router.delete('/:id', (req,res)=>{
    
// })