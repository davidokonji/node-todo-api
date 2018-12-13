const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; //enabling the mongo use promises (note it could also use callbacks)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); //doesn't have a call back fucntion
 //when using on heroku we check the db created with a addon(mongolab) using heroku config, it gives us the url required to create the 
//  db on heroku mongolab 

module.exports = {mongoose};