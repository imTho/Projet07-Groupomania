const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const userRoutes = require('./routes/user');
const contentRoutes = require('./routes/content');
const path = require('path');

const app = express();

//Database connection//
const db = require("./database_connect");

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Security & data
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

//Routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);

module.exports = app;