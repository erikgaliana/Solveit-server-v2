const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const mongoose = require('mongoose');

const User = require('../models/user');
const Problem = require('../models/problem');
const Answer = require('../models/answer');



// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('../helpers/middlewares');

  router.get('/', isLoggedIn, (req, res, next) => {
    res
      .status(200) // OK
      .json({ message: 'Test - inside answer' });
  });

// POST AN ANSWER

router.post('/', isLoggedIn, ( req,res,next)=>{
    const { text, pic, category, author, problemtosolve } = req.body;
    console.log("inside post");
    Answer.create({ text, pic, category, author, problemtosolve })
   
        .then(( newAnswer) => {
                console.log('inside create');
                return Problem.findByIdAndUpdate(problemtosolve,{ $push: { problemanswers: newAnswer._id} }, { new: true })
        })
        .then( (updatedUser) => {
            res.status(201).json(updatedUser);
          })
        .catch((err)=> {
            res.status(400).json(err);
        });

});


  module.exports = router;