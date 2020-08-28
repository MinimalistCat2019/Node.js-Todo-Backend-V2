require('dotenv').config();
const mongoose = require('mongoose');
const mongoDB = process.env.DB_CONNECTION;

mongoose.connect(
    mongoDB,
    { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => handle(error));

const db = mongoose.connection.on('error', err => {
    console.log(err);
});

if (!db) {
    console.log("Error connecting DB!");
}
else {
    console.log("DB connected sucessfully!")
}

module.exports = mongoose; 