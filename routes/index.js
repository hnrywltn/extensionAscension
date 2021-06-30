const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler (async(req, res, next) => {
  console.log(req.session)

  const allProducts = await db.Product.findAll({
    include: { model: db.User,
      include: {
        model: db.Comment
      }},
    })
  res.render('index', { title: 'Extension Ascension', allProducts });
}));

module.exports = router;
