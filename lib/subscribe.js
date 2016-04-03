var axon = require('axon');

var socket=axon.socket('sub');

socket.connect(9776,'127.0.0.1');

socket.on('error',function (err) {
console.log(err);
  throw err;
});
module.exports=socket;
