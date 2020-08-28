const apiRouter = require('express').Router();
const { getAllTasks, submitTask } = require('../controllers/TaskController');

apiRouter.route('/jobs')
    .get(getAllTasks)
    .post(submitTask);


module.exports = apiRouter;    