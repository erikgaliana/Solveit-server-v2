const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const mongoose = require('mongoose');

const User = require('../models/user');
const Problem = require('../models/problem');
const Answer = require('../models/answer');



  router.get('/', (req, res, next) => {
    res
      .status(200) // OK
      .json({ message: 'Test - Inside users' });
  });


  router.get('/:id', (req,res,next) => {
    
    const { id } = req.params;
   
    User.findById(id)
        //.populate('myproblems')
        .populate({path: 'myproblems',populate: { path: 'problemanswers' , populate:{ path : 'author'} } })
        .populate({path: 'problemstosolve',populate:  'author' })
         .populate({path: 'mysolvedproblems',populate: { path: 'solution' , populate:{ path : 'author'} } })
        // .populate({path: 'mysolvedproblems',populate: 'solution'  })
        .then((user) => { 

            res.status(200).json(user);
    })
    .catch(err => console.log(err));
   });


    // PUT '/user/:id''    => to update users array
    router.put('/:id', (req, res, next) => {
       
        
    const { id } = req.params;
   
    const { userId} = req.body;
   
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(500).json({ message: 'Specified problem id is invalid' });
      return;
    }

    User.findByIdAndUpdate(userId, { $push: { mysolvedproblems: id} }, { new: true })
        .then( () => {
            User.findByIdAndUpdate(userId, { $pull: { myproblems: id} }, { new: true })
            .then( (updatedUser) => {
                    res.status(201).json(updatedUser);
               })
            .catch( (err) => {
            res.status(400).json(err);
            })
           })
        .catch( (err) => {
        res.status(400).json(err);
        })
  
  });
  

  module.exports = router;