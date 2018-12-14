var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlenght: 1,
        trim:true
    },
    completed:{
        type: Boolean,
        default: false 
    },
    completedAt:{
        type: Number,
        default: null  
    }
});

module.exports = {Todo};

//EXAMPLES

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo:\n ',doc);
// },(err)=>{
//     console.log('Unable to do task',err)
// })
// var otherTodo = new Todo({
//     text: 'Wash plates',
//     completed: false,
//     completedate: new Date().getDay()
// });
// var otherTodo = new Todo({
//     text: ' clean up house '
// });

// otherTodo.save().then((doc)=>{
//     console.log('Saved todo:\n ',JSON.stringify(doc));
// },(err)=>{
//     console.log('Unable to do task',err)
// })