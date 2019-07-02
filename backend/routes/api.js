var express = require('express');
var router = express.Router();
var UserController = require('./../controllers/UserController');
var Auth = require('./../middleware/auth');

router.post('/login', UserController.login);
router.get('/checkToken', Auth, function(req, res) {
    res.sendStatus(200);
  });
router.get('/serect', Auth, UserController.getUser);

module.exports = router;
