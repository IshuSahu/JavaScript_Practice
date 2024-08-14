var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', { users: 'Users Page',Message: "Welcome to user page" });
});

module.exports = router;
