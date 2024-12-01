const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController').default.default.default;

router.get('/api/tasks', getAllTasks);
router.post('/api/tasks', addTask);
router.put('/api/tasks/:id', updateTask);
router.delete('/api/tasks/:id', deleteTask);

module.exports = router;