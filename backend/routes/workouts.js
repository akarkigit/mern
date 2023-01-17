const express = require('express')

const Workout = require("../models/workoutModel")

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg : "GET all workouts"})
})

// GET single workouts
router.get('/:id', (req, res) => {
    res.json({mssg : "GET a single workouts"})
})

// POST a new workouts
router.post('/', async(req, res) => {
    const {title, load, reps} = req.body
    
    try{
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // this line replaced by code above
    // res.json({mssg : "POST a new workouts"})
})

// DELETE a workouts
router.delete('/:id', (req, res) => {
    res.json({mssg : "Delete a workout"})
})

// Update a workouts
router.patch('/:id', (req, res) => {
    res.json({mssg : "UPDATE a workouts"})
})

module.exports = router