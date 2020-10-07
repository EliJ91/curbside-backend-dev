require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=>console.log("Connected to DB."))

app.use(express.json())

const UserRouter = require('./routes/users.routes')
app.use('/api/v1', UserRouter)

app.listen(5000, ()=> console.log('Server Started.'))