var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(7777, function(){
  console.log('listening on *:7777');
});

io.on('connection',function(socket) {
    console.log('ok');
    socket.emit('gg');
});
