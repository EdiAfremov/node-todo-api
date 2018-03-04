// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect")
    }
    console.log('connected to mongo')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     test: 'Somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert data", err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    // })


    client.close() //close the connection
});