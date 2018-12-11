const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err)
        return console.log('error connecting to database');

    console.log('connected to the server correctly');
    //using deleteMany
    // db.collection('Todos').deleteMany({text: 'walk the dog'}).then((res)=>{
    //     console.log(res);
    // })
    //using deleteOne
    // db.collection('Todos').deleteOne({text: 'wash plates'}).then((res)=>{
    //     console.log(res)
    // })
    //using findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((res)=>{
    //     console.log(res)
    // })


    //Testing it with Users collection
    // db.collection('User').deleteOne({name: ' Onyeka Okonji'}).then((res)=>{
    //     console.log(res.result);
    // })
    // db.close();
})