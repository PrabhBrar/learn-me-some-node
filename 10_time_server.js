var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
  var date = new Date();
  var dateString = strftime("%F %H:%M", date);
  socket.end(dateString);
});
server.listen(Number(process.argv[2]));