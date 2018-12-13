const {ObjectID} = require('mongodb')

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5c11a41fd5167a8f76096379';

// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }
// Todo.find({
//     _id : id //we can pass the id as a string unlike using native mongodb where we have to generate a new objectid
// }).then((todos)=>{
//     // console.log('Todos: ',todos);
// });

// Todo.findOne({
//     completed: false
// }).then((todo)=>{
//     // console.log("Find one todo : ",todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log(todo);

// }).catch((err)=>{console.log(err)})

///TESTING WITH USER  MODEL

var id = '5c102792877c8f6849ec4854';

if(!ObjectID.isValid(id)){
    console.log('Invalid User Id');
}

User.findById(id).then((user)=>{
    if(!user){
        return console.log('cant find user');
    }
    console.log(user);
}).catch((err)=> console.log(err));


