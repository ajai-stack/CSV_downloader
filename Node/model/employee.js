const mongoose = require('mongoose');


const employeeschema = mongoose.Schema({

    firstname: String,
    lastname: String,
    email: String,
    password: String,
    mobilenumber: Number

});
module.exports = mongoose.model('employee', employeeschema);
