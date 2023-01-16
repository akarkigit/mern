const express = require('express')

// express app
const app = express()

// req:request res:response
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app!"})
})

// listen for request
app.listen(4000, () => {
    console.log('Listening on port 4000!')
})
