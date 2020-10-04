const express = require("express");
const ap = express();
const server = require('http').Server(ap);

server.listen(3000);


ap.get('/', function (request,response) {
	response.sendFile(__dirname + '/public/index1.html');
	console.log('Тест успешен');
});
