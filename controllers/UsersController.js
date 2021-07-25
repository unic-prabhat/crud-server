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

Users.findOne({email:req.body.email})
.then(response=>{

   if(response===null){

     Users.create(req.body)
     .then(response=>{
       res.json({
         response:true
       })
     })

   }else{

    res.json({
      response:false
    })

   }

})

}

const login = (req,res) =>{

  Users.findOne({email:req.body.email})
  .then(response=>{
    if(response===null){

      res.json({
        response:false,
        message:'Wrong email'
      })

    }else{

      if(response.password===req.body.password){

        res.json({
          response:true,
          data:response
        })

      }else{

        res.json({
          response:false,
          data:'Wrong password'
        })
      }


    }
  })

}


const checkemailverificationcode = (req,res) => {
  Users.findById(req.body.id)
  .then(response=>{

    if(response===null){
      res.json({
        response:false,
        message:'Failed'
      })

    }else {
      if(response.email_verification_code===req.body.code){

        let updatedData = {
          email_verification:'Veified',
        }

        Users.findByIdAndUpdate(req.body.id, {$set: updatedData})
        .then(responseXw=>{
          res.json({
            response:true,
            data:responseXw
          })
        })

      }else{
        res.json({
          response:false,
          message:'Wrong email verification code'
        })
      }
    }



  })
}


module.exports = {
  index,store,login,checkemailverificationcode
}
