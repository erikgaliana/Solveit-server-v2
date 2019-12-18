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
    const { text, pic,category,authorID} = req.body;
    
    // const authorID = req.session.currentUser._id;
 try {  
   const newProblem = await Problem.create({ text, pic,category, author: authorID })
      
// Book.update({_id: req.query.book_id}, { $set: {title, author, description, rating }})

    const updateallusers = await User.updateMany({expert: category} , {$push: { problemstosolve: newProblem._id} } )
    const updatedUser2= await User.findByIdAndUpdate(authorID, { $pull: { problemstosolve: newProblem._id} }, { new: true })
   const updatedUser= await User.findByIdAndUpdate(authorID, { $push: { myproblems: newProblem._id} }, { new: true })
   
      
        res.status(201).json(updatedUser);
     
      
    }catch (err) {
        next(err)
      }



  });



router.put('/delete/:id',async (req, res, next) => {
    
    console.log(" req dot body",req.body);
    console.log("oarams",req.params);
    const { category,authorID} = req.body;
    const { id } = req.params;
    


 try {  
 
    await User.updateMany({expert: category} , {$pull: { problemstosolve: id} } )
    
      const updatedUser= await User.findByIdAndUpdate(authorID, { $pull: { myproblems: id} }, { new: true })
      
      await  Answer.deleteMany({problemtosolve: id});

     await Problem.findOneAndDelete(id);
      
        res.status(201).json(updatedUser);
     
      
      }catch (err) {
        next(err)
      }



  });

  // PUT '/problems/update/:id''    => to update a specific problem
 router.put('/update/:id',async (req, res, next) => {
    const { id } = req.params;
    const { solution, answerauthorId} = req.body;
  try {
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(500).json({ message: 'Specified problem id is invalid' });
      return;
    }
    // const updatedproblem = await Problem.findByIdAndUpdate( id, { text } , {new:true});
    const updatedanswerauthor= await User.findByIdAndUpdate(answerauthorId, { $pull: { problemstosolve: id} }, { new: true })
    const updatedproblem = await Problem.findByIdAndUpdate( id,{ $push: { solution: solution} } , {new:true});
        res.status(201).json(updatedproblem);
    
    } catch (err) {
       next(err);
    }
  
  })

  module.exports = router;