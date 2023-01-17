const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg : "POST a new workouts"})
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