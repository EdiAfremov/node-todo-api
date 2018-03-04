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

    // db.collection('Todos').find({ _id: new ObjectID('5a9c5bc11959dc385eafb754') }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('cant fetch data')
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count:${count}`)

    // }, (err) => {
    //     console.log('cant fetch data')
    // })

    db.collection('Users').find({ name: 'edi' }).toArray().then((docs) => {
        console.log(`Users `);
        console.log(JSON.stringify(docs, undefined, 2))

    }, (err) => {
        console.log('cant fetch data')
    })
    // client.close() //close the connection
});