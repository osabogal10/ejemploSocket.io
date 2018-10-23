var app = require('express')();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/index.html');
});

console.log('iniciando en 8080')
server.listen(8080); 


io.on('connection', function(socket) {  
    socket.emit('announcements', { message: 'A new user has joined!' });
    console.log('A new user has joined!' );
});