var express = require('express');
var timeout = require('connect-timeout');
var cors = require('cors')

var app = express();
app.use(timeout('6000s'));


app.use(cors());


app.get('/', function (request, response) {
	response.cookie('testCookie', 'cookieValue').send("Hello world GET!");
});

app.post('/', function (request, response) {
	response.send("Hello world POST!");
});


app
	.route('/angular')
	.get(function (request, response) {
		setTimeout(function () { response.send("Hello angular!"); }, 3000);


	});

app.route('/application')

	.get((request, response) => {
		setTimeout(function () {
			response.send({ "isLikeForLike": "YES", "fiveYearFixed": "YES" });
		}, 5000);

	})

	.post((request, response) => {
		setTimeout(function () {	
			response.json({ "isLikeForLike": "YES", "fiveYearFixed": "YES" });

		}, 3000);

	});

app
	.route('/angular')
	.post(function (request, response) {
		response.send("Hello angular post!");

	});
var server = app.listen(3000, function () {
	console.log('express serer running on port 3000');
});
