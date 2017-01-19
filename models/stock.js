'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stock = new Schema({
    code: String,
    description: String
});

module.exports = mongoose.model('Stock', Stock);
