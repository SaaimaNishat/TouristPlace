const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
require('dotenv/config')

const postsRoutes = require('./Routes/posts');


//  MIDDLE WARE

app.use(cors())
app.use(bodyParser.json());
app.use('/posts', postsRoutes)



//  ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
});


// connet to db

mongoose.connect(
    process.env.DB_CONNECTION,   
    { useNewUrlParser: true },
    () => 
        console.log("Connected to DB")
);

//  app listening

app.listen(12345);