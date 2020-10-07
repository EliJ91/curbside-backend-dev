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
app.use('/api/v1', UserRouter)

app.listen(5000, ()=> console.log('Server Started.'))

app.get('/', (req, res) => {
    res.send('API Status: Running')
  })