const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; //enabling the mongo use promises (note it could also use callbacks)
mongoose.connect('mongodb://localhost:27017/TodoApp'); //doesn't have a call back fucntion

module.exports = {mongoose};