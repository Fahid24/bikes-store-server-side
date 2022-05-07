const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json());




const uri = `mongodb+srv:${process.env.DB_USER}//dbuser1:${process.env.DB_PASSWORD}@cluster0.21imy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const serviceCollection = clint.db('Bike-inventory').collection('bike-collection')
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();

        });

    }
    finally {

    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Running my node Curd server')
})
app.listen(port, () => {
    console.log('CRUD server is eunning')
})