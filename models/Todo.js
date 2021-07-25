const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
     name:{
       type:String
     },
     subject:{
       type:String
     },
     gender:{
       type:String
     },
     about:{
       type:String
     }
}, {timestamps:true})

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;
