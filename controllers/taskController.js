const tasks = require('../models/taskModel');

const getAllTasks = (req, res) => {
    res.json(tasks);
};

const addTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        task: req.body.task,
        status: req.body.status || "Incomplete"
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask
};