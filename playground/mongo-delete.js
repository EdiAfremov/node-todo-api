// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect")
    }
    console.log('connected to mongo')
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({ test: 'Eat lunch' }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })
    // client.close() //close the connection
});