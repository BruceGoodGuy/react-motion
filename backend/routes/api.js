var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
res.json(['khoa', 'home', 'lan'])
});

module.exports = router;
