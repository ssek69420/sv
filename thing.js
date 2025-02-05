import express from 'express'
const app = express()
const port = 9021
const {MongoClient} = require('mongodb')


// testing if it works lmao
// it didn't work for like, 2 hours
// damn you javascript
app.get('/', (req,res) => {
    res.send("Hewo");
})

// ok now it works
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

// connecting to the bootleg postgresql
const mongodbURL = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(mongodbURL); // the youtube video said to put it like this
                                            // so I'm putting it like this 🗿

async function connect(){
    connectToDB = await client.connect()
    const coll = connectToDB.db('books')
}