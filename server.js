require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')


mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
mongoose.set('useCreateIndex', true)
db.on('error', (error)=> console.error(error))
db.once('open', ()=>console.log("Connected to DB."))

app.use(express.json())
app.use(cors())

const UserRouter = require('./routes/users.routes')
app.use('/api/user', UserRouter)

const RestaurantRouter = require('./routes/restaurants.routes')
app.use('/api/restaurant', RestaurantRouter)

const PORT = process.env.PORT || 80

app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`))

app.get('/', (req, res) => {
    res.send('API Status: Running')
  })