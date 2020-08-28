const Task = require('../models/Task');

exports.getAllTasks = (req, res) => {
    res.send('we are on jobs')
}

exports.submitTask = (req, res) => {
    console.log(req.body.task)
    const newTask = new Task({
        task: req.body.task,
    });

    try {
        const savedTask = newTask.save();
        res.json(savedTask);
    }
    catch (err) {
        res.json({ message: err })
    }
}

// exports.getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find();
//         res.json(tasks);
//     }
//     catch (err) {
//         res.json({ message: err })
//     }
// }