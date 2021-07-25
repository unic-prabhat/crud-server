const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({

      name:{
        type:String
      },
      email:{
        type:String
      },
      gender:{
        type:String
      },
      phone:{
        type:String
      },
      password:{
        type:String
      },
      subject:{
        type:String
      },
      address:{
        type:String
      }

}, {timestamps:true});

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;
