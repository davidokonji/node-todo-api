// const MongoClient  = require('mongodb').MongoClient;

const {MongoClient,ObjectID}  = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err)
        return console.log('error connecting to database');

    console.log('connected to the server correctly');

    // db.collection('Todos').insertOne({
    //     text: 'hello world',
    //     completed: false
    // },(err,result)=>{
    //     if(err) return console.log('unable to insert',err);

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // db.collection('User').insertOne({
    //     name: ' Teriza Okonji',
    //     age: 56,
    //     location: 'lagos'
    // },(err,result)=>{
    //     if(err) return console.log('error inserting into user',err);

    //     console.log(result.ops[0]._id.getTimestamp());//getting the current time stamp of entry to the db
    // })
    
    db.close();
})