const express = require('express');
const cors = require('cors');
const mongooes = require('mongoose');

require('dotenv').config();

//create express server
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const uri = process.env.MONGODB_URI;
mongooes.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongooes.connection;
connection.once('open', () => {
    console.log("MongoDB connection established.");
})

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})