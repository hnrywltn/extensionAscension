const express = require('express');
const router = express.Router();

const { User, Product, Comment } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');


router.get('/submit', csrfProtection, function (req, res, next) {
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
    .isLength({ max: 50 })
    .withMessage('Too long fool'),
  check('imgUrl')
    .isLength({ max: 400 })
    .withMessage('Too long fool'),
  check('productUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Extension URL')
    .isLength({ max: 400 })
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

router.post('/submit', csrfProtection, productValidators, asyncHandler(async (req, res, next) => {
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

  if (validatorErrors.isEmpty()) {
    const extension = await Product.create({
      productName,
      imgUrl,
      productUrl,
      categoryId,
      userId,
      description
    });

    return res.redirect(`/users/profile/${userId}`);
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


///////////////////////////get product by id and comments post
router.get("/:id(\\d+)", csrfProtection, asyncHandler(async (req, res) => {
  const productId = Number(req.params.id);
  const product = await Product.findByPk(productId, {
    include: User
  });
  const comments = await Comment.findAll({
    where: {productId},
    include: User,
    order: [["createdAt", "DESC"]]
  });
    res.render('product', {
      product,
      comments,
      csrfToken: req.csrfToken()
    })


}));

router.post("/:id(\\d+)", csrfProtection, asyncHandler(async (req, res) => {
  const { body } = req.body;
  const comment = Comment.build({
    body,
    userId: req.session.auth.userId,
    productId: Number(req.params.id)
  })
  await comment.save();
  res.redirect(`/products/${Number(req.params.id)}`)

}));




module.exports = router;
