const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { User } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');


//build validations array



/* GET users listing. */


router.get('/users/log-in', function(req, res, next) {
});

router.post('/users/log-in', function(req, res, next) {
  //render 'home pug'
  res.send('respond with a resource');
});




router.get('/users/register', csrfProtection, function(req, res, next) {
  const user = User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post('/users/register', function(req, res, next) {
  res.send('respond with a resource');
});









module.exports = router;
