const express = require("express");
const app = express();
const PORT = 3000;

const { MongoClient } = require('mongodb');
const connectionString = 'mongodb+srv://daltpettus:Eudaimonia13*@cluster0.sj8b5cc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const startServer = async() => {
    try {
        const client = await MongoClient.connect(connectionString);
        console.log('Connected to database');

        const db = client.db('star-wars-quotes');
        const quotesCollection = db.collection('quotes');
        
        app.use(express.urlencoded({ extended: true })); // allows us to read data from form element on its own, must be placed before CRUD handlers
        app.use(express.static('public')); // makes public folder publicly accessible
        app.use(express.json()); // instruct express to accept json data


    } catch(error) {
        console.error(error);
    }
}

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;