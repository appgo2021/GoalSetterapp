const express = require('express')
const router = express.Router()
const { getGoals,setGoals, updateGoals, deleteGoals } = require('../controller/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, setGoals).get(protect, getGoals)
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

module.exports = router