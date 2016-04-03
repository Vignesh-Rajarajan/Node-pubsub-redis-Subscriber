var express = require('express');

var app=express()
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
var subSocket=require('./lib/subscribe.js');
server.listen(4000,function(err){
if(err)	throw err;
console.log('server started at'+4000);
});
var model=require('./model/badges.js');

app.use(express.static(__dirname+'/public'));


app.get('/',function(req,res){
  res.sendfile('index.html');
})

io.sockets.on('connection',function (socket) {
  console.log('connection established');
  model.get(function (err,data) {
    if(err) return;
    data.forEach(function (badge) {
      socket.emit('badge',badge)
    });
  });
});

subSocket.on('message',function(message){
  io.sockets.emit('badge',message);
});
