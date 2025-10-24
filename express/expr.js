var express = require('express');
var app = express();
app.get('/', function (req, res) {
console.log("Got a GET request for the homepage");
res.send('Welcome to Express JS!!!');
});
app.post('/homee', function (req, res) {
console.log('Got a POST request for the /homee page');
res.send('POST request to the homepage');
});
app.get('/listUsers', function (req, res) {
console.log("Got a GET request for /listUsers");
res.send('This is the user list page!');
});
app.get('/del_user', function (req, res) {
console.log("Got a GET request for /del_user");
res.send('Delete user page!');
});
app.get('/enrolled_student', function (req, res) {
console.log("Got a GET request for /enrolled_student");
res.send('I am Enrolled!');
});
app.get('/ab*cd', function (req, res) {
console.log("Got a GET request for a pattern matching route");
res.send('Pattern Match!');
});
var server = app.listen(5000, function () {
var port = server.address().port;
console.log("Example app listening at http://localhost:%s", port);
});
