require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 2540;
app.use(express.json());
app.use(cors()); 


const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB_NAME;

let db;

async function connectToDatabase() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Conectado ao MongoDB');
        db = client.db(dbName);

        app.listen(port, () => {
            console.log(`API rodando na porta ${port}`);
        });
    } catch (err) {
        console.error('Falha ao conectar ao MongoDB', err);
        process.exit(1);
    }
}

connectToDatabase();


app.post('/', async (req, res) => {
    try {
        const result = await db.collection('test').insertOne(req.body);
        res.status(201).json({ _id: result.insertedId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/', async (req, res) => {
    try {
        const items = await db.collection('test').find().toArray();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


