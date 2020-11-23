/*jshint esversion: 6 */
const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/vuelos', require('./routes/vuelos.routes'));

module.exports = app;