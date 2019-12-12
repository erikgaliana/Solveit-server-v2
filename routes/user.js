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
    const userId = req.session.currentUser._id;
    User.findById({_id: userId})
        //.populate('myproblems')
        .populate({path: 'myproblems',populate: { path: 'problemanswers' , populate:{ path : 'author'} } })
        .populate({path: 'problemstosolve',populate: { path: 'problemanswers', populate:{ path : 'author'} } })
        .populate({path: 'mysolvedproblems',populate: { path: 'problemanswers' , populate:{ path : 'author'} } })
        .then((user) => { 

            res.status(200).json(user);
    })
    .catch(err => console.log(err));
   });


    // PUT '/user/:id''    => to update users array
    router.put('/:id', (req, res, next) => {
        console.log('req.params', req.params.id);
        
    const { id } = req.params;
    console.log('id',id);
    
    const userId = req.session.currentUser._id;
    //const { text, category } = req.body;
  
  
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   res.status(500).json({ message: 'Specified problem id is invalid' });
    //   return;
    // }

    // console.log('inside update');
    // User.findByIdAndUpdate( id, {text, category} )
    //   .then( () => {
    //     res.status(201).json({ message: 'problem updated '});
    //   })
    //   .catch( (err) => {
    //     res.status(400).json(err);
    //   });
    // console.log('problem id', id);
    // console.log('user Id', userId);
    

    // User.findByIdAndUpdate(userId, { $push: { mysolvedproblems: id} }, { new: true })
    //     .then( (updatedUser) => {
    //             res.status(201).json(updatedUser);
    //        })
    //     .catch( (err) => {
    //     res.status(400).json(err);
    //     })

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