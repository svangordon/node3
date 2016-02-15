// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  fs.readFile('./index.html', function(err, data) {
  	res.header('Content-Type', 'text/html');
  	res.send(data);
  })
});

app.post('/formsubmit', function(req, res){
  res.redirect('/success')
});

app.get('/success', function (req, res) {
	res.send('Good Job')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})