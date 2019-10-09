const express = require('express'); 
const cors = require('cors');
const mongoogse = require('mongoose');

require('dotenv').config();

const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json());
const uri = process.env.ATLAS_URI; 

mongoogse.connect(uri, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true });
const connection = mongoogse.connection;
connection.once('open', ()=> {
    console.log("MongoDB Database connection stublished suucessfully.");
});


// Routes
const excercisesRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');
app.use('/exercises', excercisesRouter);
app.use('/users', usersRouter);


//Listern
app.listen(port, () => {
    console.log(`Server starts is running port : ${port}`);
})
