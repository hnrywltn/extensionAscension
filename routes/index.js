const express = require('express');
const router = express.Router();
const { User, Comment, Product } = require('../db/models');
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler (async(req, res, next) => {
  const allProducts = await Product.findAll({
    include: { model: User,
      include: {
        model: Comment
      }},
    })
  res.render('index', {
    title: 'Extension Ascension',
    allProducts
  });
}));

router.get('/progress', (req, res) => {
  res.render('progress');
})

module.exports = router;
