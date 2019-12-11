const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const mongoose = require('mongoose');

const User = require('../models/user');
const Problem = require('../models/problem');



 


// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('../helpers/middlewares');


  router.get('/', isLoggedIn, (req, res, next) => {
    res
      .status(200) // OK
      .json({ message: 'Test - inside problems' });
  });
  
  //  
//   router.post(
//     '/',
//    isLoggedIn,
//     async (req, res, next) => {
//       console.log( "inside post problems");
//       const { text, pic,category,authorID} = req.body;
       
       
//       try {
        
//           const newProblem = await Problem.create({ text, pic, category});
          
//           res
//             .status(200) //  OK
//             .json(newProblem);
//         }
//        catch (error) {
//         next(error);
//       }
//     },
//   );

// POST '/problems'      => to create a new task
router.post('/',isLoggedIn, (req, res, next) => {
    const { text, pic,category,authorID } = req.body;
    console.log(req.body);
    Problem.create({ text, pic,category, author: authorID })
      .then( (newProblem) => {
        console.log( "inside create");
        console.log("problem",newProblem);
        return User.findByIdAndUpdate(authorID, { $push: { myproblems: newProblem._id} }, { new: true })
    })
      .then( (updatedUser) => {
        res.status(201).json(updatedUser);
      })
  
      .catch( (err) => {
        res.status(400).json(err);
      });
  });


  module.exports = router;