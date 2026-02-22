const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: "Initial task (altered)", completed: true },
  { id: 2, title: "Install Git and Node.js (altered)", completed: true },
  { id: 3, title: "Learn DevOps basics (altered)", completed: false }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// CREATE new task
router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
