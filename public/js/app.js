  var socket = io.connect('http://localhost:80');
  // var socket = io.connect('http://10.1.27.32:80');

  // enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    socket.on('broadcast', function (data) {
      console.log("Server sent: " + data);
      socket.emit('clientmessage', { message: 'hello!' });
    });
  

    $(function () {
      //jQuery Code
    });