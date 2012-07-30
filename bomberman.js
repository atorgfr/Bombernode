var express = require("express");  
var app = express.createServer();
var io = require('socket.io').listen(app);



app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public',{ maxAge: 31557600000 }));

app.listen(80);

app.get('/', function(req, res){
  //var QRCode = require('qrcode');
  //QRCode.toDataURL('1234',function(err,url){ 
    res.header('Content-Type','text/html');
    res.render("game",{qr:"url"}); 
  //});
});

app.get('/control', function(req, res){
  	res.header('Content-Type','text/html');
    res.render("control"); 
});



io.sockets.on('connection', function (socket) {
  
  socket.emit('connected',{id:"ok"});

  socket.on('move', function (data) {
  	io.sockets.in('room1234').emit('moving', data);
  });

  socket.on('enterroom', function(data){
  	console.log('enter' + data);
  	socket.join('room1234');
  });
});