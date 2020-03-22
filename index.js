const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config')

//Bodyparser Middleware & Cors(google chrome)
app.use(express.json())
app.use(cors());

//DB Config
const db = config.get("mongoURI");

//Connect to MongoDB with model drive called mongoose
mongoose.connect(db,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err));

//API's
const patients = require('./routes-api/patients')

//ROUTES-API
app.use('/', patients)

const port = 4000
app.listen(port, () => console.log(`Application Started On Port ${port}!`))