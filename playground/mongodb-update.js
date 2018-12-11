// const MongoClient  = require('mongodb').MongoClient;

const {MongoClient,ObjectID}  = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err)
        return console.log('error connecting to database');

    console.log('connected to the server correctly');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c0fb454dccc2dc788b99f57')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res)=>{
    //     console.log(res);
    // })
    db.collection('User').findOneAndUpdate({
        name: 'David Okonji'
    },{
        $set:{
            name: 'Nonso Okonji'
        },
        $inc:{
            age : -2
        }
    },
    {
        returnOriginal: false
    }).then((res)=>{
        console.log(res);
    })
    
    // db.close();
})