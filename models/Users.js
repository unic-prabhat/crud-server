const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
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
      },
      email_verification:{
        type:String,
        default:'NotVerified'
      },
      email_verification_code:{
        type:String,
        default:uuidv4()
      }

}, {timestamps:true});

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;
