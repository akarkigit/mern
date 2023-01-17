const mongoose = require('mongoose')

const Schema = mongoose.Schema

// schema for a collection in mongodb
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, { timestamps: true })

// model create a Collection(mongodb table)
module.exports = mongoose.model('Workout', workoutSchema)