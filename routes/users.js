const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { User, Product } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
// const { ValidationError } = require('sequelize/types');
const { loginUser, logoutUser, restoreUser } = require('../auth');



///////////////////////////login
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

    if(user) {
      const passwordMatch = await bcrypt.compare(password, user.password.toString());

      if(passwordMatch) {
        loginUser(req, res, user);
      }
    }
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }

}));




/////////////////////////////////register
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
    loginUser(req, res, user);
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




//////////////////////////////////////logout/demo
router.get('/log-out', (req, res) => {
  logoutUser(req, res);
});

router.get('/demo', (req, res) => {
  const user = { id: 19 };
  loginUser(req, res, user);
});


///////////////////////////////////profile
router.get(`/profile/:id(\\d+)`, csrfProtection, asyncHandler(async (req, res) => {
  const userId = Number(req.params.id);
  const user = await User.findByPk(userId);
  const products = await Product.findAll({
    where: { userId }
  })
  let signedIn = false;

  if(req.session.auth.userId && (req.session.auth.userId === Number(req.params.id))) signedIn = true;
  res.render('profile', {
    user,
    products,
    signedIn
  })
}));

/////////////////Edit Description///////////////////////////////////
router.patch(`/product/:id(\\d+)`, asyncHandler(async(req,res) =>{
  const {description, productId} = req.body;
    console.log(req.body, "req.body")
  const updateProduct = await Product.findByPk(productId);
    updateProduct.description = description;
    await updateProduct.save()
    // console.log('UPDATED PRODUCT', updateProduct)
    const test = await Product.findByPk(productId);
    console.log(test.description)
    res.json({updateProduct})
}))

router.post(`/product/:id(\\d+)`, asyncHandler(async(req, res) => {
  const productId = Number(req.params.id);
  const removed = await Product.findByPk(productId);
  await removed.destroy();
  res.redirect(`/users/profile/${req.session.auth.userId}`)
}))








module.exports = router;
