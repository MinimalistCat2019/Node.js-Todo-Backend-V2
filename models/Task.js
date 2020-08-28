const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Task = (module.exports = mongoose.model('Tasks', TaskSchema));
