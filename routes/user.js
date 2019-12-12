const express = require('express');
const router = express.Router();
const createError = require('http-errors');

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
        .populate({path: 'problemstosolve',populate: { path: 'problemanswers' } })
        .populate({path: 'mysolvedproblems',populate: { path: 'problemanswers' } })
        .then((user) => { 

            res.status(200).json(user);
    })
    .catch(err => console.log(err));
   });

  

  module.exports = router;