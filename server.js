// requires
var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index'); // connects our route to index.js

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', index); // Looks for our route to index.js

//globals
var port = process.env.PORT || 2469;

//spin up server
app.listen(port, function(){
  console.log('Server is up on: ', port);
});
