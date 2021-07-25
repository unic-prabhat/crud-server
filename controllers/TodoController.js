const {response} = require('express');
const Todo = require('../models/Todo');


//*****INDEX****

const index = (req,res) => {

  Todo.find().sort({_id:-1})
    .then(response=>{
      res.json({
        response:true,
        data:response
      })
    })
    .catch({

    })


}

const store = (req,res) => {

  Todo.create(req.body)
  .then(response => {
    res.json({
      response:true
    })
  })
}

const view = (req,res) =>{

  Todo.findById(req.params.id,(err,doc)=>{

   if(!err){
    res.json({
      response:true,
      data:doc
    })
  }else{
    res.json({
      response:false
    })
  }

  })

}

const removeid = (req,res) =>{

  Todo.findByIdAndRemove(req.params.id, (err,doc)=>{

   if(!err){

     res.json({
       response:true,
       data:doc
     })

   }else{

     res.json({
       response:false
     })

   }

  })
}

const update = (req,res) =>{
 let updatedData = {
   name:req.body.name,
   subject:req.body.subject,
   gender:req.body.gender,
   about:req.body.about

 }

var id=req.body._id;
 Todo.findByIdAndUpdate(id, {$set: updatedData})
 .then(response=>{
   res.json({
     response:true
   })
 })
}


module.exports = {
  index,store,view,removeid,update
}
