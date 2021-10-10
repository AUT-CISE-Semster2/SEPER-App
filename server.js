const express = require('express');
const cors = require('cors');
const mongooes = require('mongoose');
const path = require('path');

require('dotenv').config();

//create express server
const app = express();
app.use(cors());

//Connect mongooes
const uri = process.env.MONGODB_URI;
mongooes.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongooes.connection;
connection.once('open', () => {
    console.log("MongoDB connection established.");
})

//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// routes
const articles = require('./routes/articles');
//use Routes
app.use('/articles', articles);
app.use('/articles/', articles);

//create port
const PORT = process.env.PORT || 5000;

//check if the application is in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./seper-app/build'));

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'seper-app', 'build', 'index.html'));
    });
}

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})