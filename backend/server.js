require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js')

// express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route req:request res:response
//routes import from routes/workouts.js
/*app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app!"})
})*/
app.use('/api/workouts', workoutRoutes)

// connect to mongodb
mongoose.connect(process.env.MONGO_UI)
.then(() => {
    // listen for request once connected to mongo
app.listen(process.env.PORT, () => {
    console.log('Mongodb connected! Listening on port ', process.env.PORT)
})
})
.catch(() => {
    console.log(error)
})

// listen for request ***moved inside mongodb
//app.listen(process.env.PORT, () => {
    //console.log('Listening on port ', process.env.PORT)
//})
