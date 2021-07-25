const { response } = require('express');
const Users = require('../models/Users');

const  index = (req,res) =>{

  Users.find().sort({_id:-1})
  .then(response =>{
    res.json({
      response:true,
      data:response
    })
  })
  .catch({

  })

}

const store = (req,res) =>{

    Users.create(req.body)
    .then(response =>{
      res.json({
        response:true
      })
    })
}

const login = (req,res) =>{

  res.json({
    response:true,
    data:req.body
  })

}


module.exports = {
  index,store,login
}
