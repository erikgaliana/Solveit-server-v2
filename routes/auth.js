const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user');
const Problem = require('../models/problem');

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');

//  GET    '/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  req.session.currentUser.password = '*';
  res.json(req.session.currentUser);
});

//  POST    '/signup'
router.post(
  '/signup',
  isNotLoggedIn,
  validationLoggin,
  async (req, res, next) => {
    const { username, password,email,pictureUrl,expert, points} = req.body;
      console.log( "username" , username);
      console.log("mail", email );
     
    try {
      // projection
      const usernameExists = await User.findOne({ username }, 'username');

      if (usernameExists) return next(createError(400));
      else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ username, password: hashPass, email, pictureUrl, expert, points});
        req.session.currentUser = newUser;
        res
          .status(200) //  OK
          .json(newUser);
      }
    } catch (error) {
      next(error);
    }
  },
);

//  POST    '/login'
router.post(
  '/login',
  isNotLoggedIn,
  validationLoggin,
  async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        next(createError(404));
      } else if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        res.status(200).json(user);
        return;
      } else {
        next(createError(401));
      }
    } catch (error) {
      next(error);
    }
  },
);

//  POST    '/logout'
router.post('/logout', isLoggedIn, (req, res, next) => {
  const { username } = req.session.currentUser;
  req.session.destroy();
  res
    .status(200) //  No Content
    .json({ message: `User '${username}' logged out - session destroyed` });
  return;
});

//  GET    '/private'   --> Only for testing - Same as /me but it returns a message instead
router.get('/private', isLoggedIn, (req, res, next) => {
  res
    .status(200) // OK
    .json({ message: 'Test - User is logged in' });
});

router.get('/problems', isLoggedIn, (req, res, next) => {
  res
    .status(200) // OK
    .json({ message: 'Test - inside problems' });
});

//  
router.post(
  '/problems',
 isLoggedIn,
  async (req, res, next) => {
    console.log( "inside post problems");
    const { text, pic,category} = req.body;
     
     
    try {
      
        const newProblem = await Problem.create({ text, pic, category});
        
        res
          .status(200) //  OK
          .json(newProblem);
      }
     catch (error) {
      next(error);
    }
  },
);



module.exports = router;
