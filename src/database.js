/*jshint esversion: 6 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser:true
})
    .then(db => console.log("DB is connected"))
    .catch((err) => console.err(err))