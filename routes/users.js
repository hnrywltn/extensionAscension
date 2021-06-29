const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { User } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
// const { ValidationError } = require('sequelize/types');
const { loginUser, logoutUser } = require('../auth');

//build validations array



/* GET users listing. */


router.get('/log-in', csrfProtection, function(req, res, next) {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/log-in', csrfProtection, loginValidators, asyncHandler(async(req, res, next) => {
  const {
    email,
    password
  } = req.body;

  let errors = [];

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    const user = await User.findOne({ where: { email } });

    if(user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.password.toString());

      if(passwordMatch) {
        loginUser(req, res, user);
        return res.redirect('/');
      }
    }
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('user-login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken(),
  });
}));

const userValidators = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name')
    .isLength({ max: 50 })
    .withMessage('50 characters max for name'),
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a username')
    .isLength({ max: 50 })
    .withMessage('50 characters max for username'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email address')
    .isEmail({ checkFalsy: true })
    .withMessage('Please provide a valid email address')
    .isLength({ max: 100 })
    .withMessage('50 characters max for name')
    .custom((email) => {
      return User.findOne({ where: { email } }).then((user) => {
        if(user) return Promise.reject('Email address already in use.');
      });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please include a password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage('Please provide a password that includes at least one uppercase letter, one lowercase letter, one number, and one special character'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please confirm the entered password')
    .custom((confirmPassword, { req }) => {
      if (confirmPassword !== req.body.password)
          throw new Error("Please make sure your passwords match");
      return true;
      }),
]


//the userRouter begins after the '/users' as per the app.use('/users', usersRouter) command
router.get('/register', csrfProtection, function(req, res, next) {
  const user = User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post('/register', csrfProtection, userValidators, asyncHandler(async(req, res, next) => {
  const {
    name,
    userName,
    email,
    password,
    confirmPassword,
    profileImg,
    bio
  } = req.body

  const user = User.build({
    name,
    userName,
    email,
    profileImg: profileImg || 'https://thispersondoesnotexist.com/image',
    bio
  })

  //create an array of any errors
  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);

    res.render('user-register', {
      title: 'Register',
      user,
      errors,
      csrfToken: req.csrfToken(),
    })

  }

}));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});


module.exports = router;
