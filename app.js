var express = require('express')
var fs = require('fs')
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var appdb = {};

app.use(express.static('public'))

// app.get('/test', function (req, res) {
//   res.send('Hello World!')
// })


io.sockets.on('connection', function (socket) {
  
  socket.emit('broadcast', { msg: 'Hi elient' });

  socket.on('changeVDO', function (data) {
    console.log(data.msg);
    io.sockets.emit("changeV", data);
  })

});


var ip = require("ip")

server.listen(80, function () {
  console.log('Smart display start andd access on http: ' + ip.address())
})