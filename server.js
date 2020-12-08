const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();

const scoresRouter = require('./routes/api/scores');
const usersRouter = require('./routes/api/users');


require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/scores', scoresRouter);
app.use('/api/users', usersRouter);


app.use('/api/users', require('./routes/api/users'));
// Mount our custom auth middleware to protect routes below it
app.use(require('./config/auth'));
app.use('/api/scores', require('./routes/api/scores'));
const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});