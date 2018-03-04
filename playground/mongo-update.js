// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect")
    }
    console.log('connected to mongo')
    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5a9c69b11959dc385eafbbec")
    }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result)
        }, (err) => {
            console.log(err)
        })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a9c4b7c3d1f3f0fec93f7c1")
    }, {
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result)
        }, (err) => {
            console.log(err)
        })

    // client.close() //close the connection
});