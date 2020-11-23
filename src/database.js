/*jshint esversion: 6 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.56.101/test', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.log("Hay un error en la conexion de la DB"));