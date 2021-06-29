const express = require('express');
const router = express.Router();

const { User, Product } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');





router.get('/submit', csrfProtection, function(req, res, next) {
  console.log(req.session)
  const userId = req.session.auth.userId
  res.render('submit-product', {
    title: 'Submit Extension',
    userId,
    csrfToken: req.csrfToken(),
  });
});

const productValidators = [
  check('productName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Extension Name')
    .isLength({max: 50})
    .withMessage('Too long fool'),
  check('imgUrl')
    .isLength({max: 400})
    .withMessage('Too long fool'),
  check('productUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Extension URL')
    .isLength({max: 400})
    .withMessage('Too long fool'),
  check('categoryId')
    .exists({ checkFalsy: true })
    .withMessage('Select a category fool'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Tell us about your extension fool'),
  check('userId')
    .exists({ checkFalsy: true })
    .withMessage('Stop hacking around fool')
];

router.post('/submit', csrfProtection, productValidators, asyncHandler(async(req, res, next) => {
  const {
    productName,
    imgUrl: imgUrl,
    productUrl,
    categoryId,
    description,
    userId
  } = req.body;


  let errors = [];

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    const extension = await Product.create({
      productName,
      imgUrl,
      productUrl,
      categoryId,
      userId,
      description
    });

    return res.redirect('/');
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('submit-product', {
    title: 'Submit Extension',
    productName,
    imgUrl,
    productUrl,
    categoryId,
    description,
    userId,
    errors,
    csrfToken: req.csrfToken(),
  });
}));






module.exports = router;
