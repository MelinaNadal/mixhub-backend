const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT= process.env.PORT || 3000;
// const MONGODB_URI ='mongodb://localhost/expresstagram'

// const db = mongoose.connection;


// mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true });

require('dotenv').config();


const usersRouter = require('./routes/api/users');


require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/users', usersRouter);

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});