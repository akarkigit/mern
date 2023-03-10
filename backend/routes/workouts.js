const express = require('express')
const {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout    
} = require("../controllers/workoutController")

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)
/*router.get('/', (req, res) => {
    res.json({mssg : "GET all workouts"})
})*/

// GET single workouts
router.get('/:id', getSingleWorkout)
/*router.get('/:id', (req, res) => {
    res.json({mssg : "GET a single workouts"})
})*/

// POST a new workouts
router.post('/', createWorkout)
/*router.post('/', async(req, res) => {
    const {title, load, reps} = req.body
    
    try{
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // this line replaced by code above
    // res.json({mssg : "POST a new workouts"})
})*/

// DELETE a workouts
router.delete('/:id', deleteWorkout)
/*router.delete('/:id', (req, res) => {
    res.json({mssg : "Delete a workout"})
})*/

// Update a workouts
router.patch('/:id', updateWorkout)
/*router.patch('/:id', (req, res) => {
    res.json({mssg : "UPDATE a workouts"})
})*/

module.exports = router