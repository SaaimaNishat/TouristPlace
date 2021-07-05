const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
require('dotenv/config')

const postsRoutes = require('./Routes/posts');
const commentRoutes = require('./Routes/Comment')
const userRoute = require('./Routes/Users')


//  MIDDLE WARE

app.use(cors())
app.use(bodyParser.json());
app.use('/api/posts', postsRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/user', userRoute)



//  ROUTES
app.get('/api/', (req, res) => {
    res.send('Welcome to Tourista')
});


// connet to db

mongoose.connect(
    process.env.DB_CONNECTION,   
    { useNewUrlParser: true,  useUnifiedTopology: true },
    () => 
        console.log(process.env.DB_CONNECTION)
);

//  app listening

const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env

app.listen(PORT, LOCAL_ADDRESS, () => {
    const addrs = app.address();
    console.log("Server started at", addrs)
});