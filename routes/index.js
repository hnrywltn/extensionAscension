const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

module.exports = router;
