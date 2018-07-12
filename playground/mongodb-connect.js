// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

// var user = {name: 'Chris', age: 25};
// var {name} = user; 
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to Do',
    //     completed: false
    // }, (err, result)=> {
    //     if (err) {
    //         return console.log('Unable to insert toDo')
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    // db.collection('users').insertOne({
    //     name: 'Chris Kim',
    //     age: 27,
    //     location: 'Austin, TX'
    // }, (err, result)=> {
    //     if (err) {
    //         return console.log('Unable to insert toDo')
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});
