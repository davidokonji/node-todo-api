// const MongoClient  = require('mongodb').MongoClient;

const {MongoClient,ObjectID}  = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err)
        return console.log('error connecting to database');

    console.log('connected to the server correctly');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c0f9e9fdccc2dc788b99b94')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    //     },(err)=>{
    //     console.log('unable to fetch todo',err)
    // })
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(docs,undefined,2));
    //     },(err)=>{
    //     console.log('unable to fetch todo',err)
    // })
    // db.collection('User').find({name: ' Teriza Okonji'}).toArray().then((res)=>{
    //     console.log('Users');
    //     console.log(JSON.stringify(res,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fecth data',err);
    // }) 
    // db.collection('User').find({name: ' Onyeka Okonji'}).count().then((count)=>{
    //     console.log(`The number of users is : ${count}`);
    // })
     //db.close();  //commented it out because it would affect the flow of the fetching of data
})