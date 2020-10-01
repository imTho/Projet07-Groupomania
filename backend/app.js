const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Security packages
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

module.exports = app;