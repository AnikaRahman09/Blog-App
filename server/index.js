import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'; //to handle POST API requests. GET dose not need Body parsing


// import database
import Connection from './database/db.js';
// import router
import Router from './routes/route.js';

dotenv.config();

const app = express();
const port = 8000;

app.use(cors()); //to handle different port issue frontend 3000 and backend 8000;
app.use(bodyParser.json( {extended: true} ));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 });

 const USERNAME = process.env.DB_USERNAME;
 const PASSWORD = process.env.DB_PASSWORD;

 Connection(USERNAME, PASSWORD);