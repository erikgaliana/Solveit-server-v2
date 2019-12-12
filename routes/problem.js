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
  
  //  
//   router.post(
//     '/'
//   ,
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

// POST '/problems'      => to create a new problem
router.post('/', (req, res, next) => {
    const { text, pic,category,authorID } = req.body;
    
    Problem.create({ text, pic,category, author: authorID })
      .then( (newProblem) => {
       
        return User.findByIdAndUpdate(authorID, { $push: { myproblems: newProblem._id} }, { new: true })
    })
      .then( (updatedUser) => {
        res.status(201).json(updatedUser);
      })
  
      .catch( (err) => {
        res.status(400).json(err);
      });
  });


  // PUT '/problems/update/:id''    => to update a specific problem
 router.put('/update/:id', (req, res, next) => {
    const { id } = req.params;
    const { text, category } = req.body;
  
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(500).json({ message: 'Specified problem id is invalid' });
      return;
    }
    console.log('inside update');
    Problem.findByIdAndUpdate( id, {text, category} )
      .then( () => {
        res.status(201).json({ message: 'problem updated '});
      })
      .catch( (err) => {
        res.status(400).json(err);
      });
  
  })

  module.exports = router;