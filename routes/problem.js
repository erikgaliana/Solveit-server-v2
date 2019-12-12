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
      .json({ message: 'Test - inside problems' });
  });
  
  
router.post('/',async (req, res, next) => {
    const { text, pic,category} = req.body;
    const authorID = req.session.currentUser._id;
 try {  
   const newProblem = await Problem.create({ text, pic,category, author: authorID })
      
   const updatedUser= await User.findByIdAndUpdate(authorID, { $push: { myproblems: newProblem._id} }, { new: true })
   
      
        res.status(201).json(updatedUser);
     
      
    }catch (err) {
        next(err)
      }



  });


  // PUT '/problems/update/:id''    => to update a specific problem
 router.put('/update/:id',async (req, res, next) => {
    const { id } = req.params;
    const { text} = req.body;
  try {
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(500).json({ message: 'Specified problem id is invalid' });
      return;
    }
    const updatedproblem = await Problem.findByIdAndUpdate( id, { text } , {new:true});
    
        res.status(201).json(updatedproblem);
    
    } catch (err) {
       next(err);
    }
  
  })

  module.exports = router;