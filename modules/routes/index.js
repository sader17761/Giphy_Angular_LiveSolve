/*---- ROUTES ----*/

var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  console.log('Base url hit');
  res.sendFile(path.resolve('public/views/index.html')); // gets and sends our index.html file
}); //end base url

module.exports = router;
