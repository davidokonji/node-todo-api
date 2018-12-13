const {ObjectID} = require('mongodb')

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//     console.log(res);
// },(err)=>{
//     console.log(err);
// });

// Todo.findOneAndRemove().then((res)=>{

// },(err)=>{

// });

// Todo.findByIdAndRemove('5c12552eee4767ef2136e540').then((todo)=>{
//     console.log(todo)
// })