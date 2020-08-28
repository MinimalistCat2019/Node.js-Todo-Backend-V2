const express = require('express');
const app = express();
const dbConnection = require('./db/connection');
const apiRouter = require('./routes/apiRouter');

app.use(express.json());
app.use('/http://localhost:4060/v1', apiRouter);


app.listen(4060, () => {
    console.log('Server listening on port 4060')
})

module.exports = app;