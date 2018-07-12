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

    // db.collection('Todos').find({
    //     _id: new ObjectID("5b46f915a8f394bf5cb52d79")
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // })
    // db.collection('Todos').count().then((count) => {
    //     console.log(`Todos Count : ${count}`)
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // })
    // db.collection('Users').find({
    //     name: 'Chris'
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch data', err)
    // })

    db.collection('Users').count({
        name: 'Chris'
    }).then((count) => {
        console.log(`User Count : ${count}`)
    }, (err) => {
        console.log('unable to fetch todos', err)
    })


    //client.close();
});
