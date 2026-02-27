const express = require('express');
const app = express();
app.use(express.json());

// Import the tasks router
const tasksRouter = require('./routes/tasks');

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running (Lab2)" });
});

// Use the router for /tasks
app.use('/tasks', tasksRouter);

// --- FIX STARTS HERE ---

// This "if" block ensures the server only starts if you run 'node src/app.js'
// It will NOT run when 'npm test' imports this file.
if (require.main === module) {
  app.listen(3000, () => {
    console.log("API running on port 3000");
  });
}

// You MUST export the app so that tests/app.test.js can use it
module.exports = app;
