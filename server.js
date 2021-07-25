const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const result = require('dotenv').config();

const Todo = require('./routes/todo');
const RouteUser = require('./routes/user');


mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error',(err)=>{
  console.log('Failed to connect.')
  console.log(err);
})

db.once('open',()=>{
  console.log('Successfully Connected.')
})

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/todo',Todo);
app.use('/api/user',RouteUser);

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req,res)=>{
  res.send('<h1>Welcome To All</h1>')
})

const PORT = process.env.port || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
