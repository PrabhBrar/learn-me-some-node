var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res) {
  if(req.method!='GET')
    return res.end('Please send a GET\n');
  var queryString = url.parse(req.url,true);
  if (queryString.pathname=='/api/parsetime') {
    var myDate = new Date(queryString.query.iso);
    var result = {
      hour: myDate.getHours(),
      minute: myDate.getMinutes(),
      second: myDate.getSeconds()
    };
  } else if (queryString.pathname=='/api/unixtime') {
    var myDate = +new Date(queryString.query.iso);
    var result = {
      unixtime: myDate
    };
  }
  if(result) {
    res.writeHead(200, {
    'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
});
server.listen(Number(process.argv[2]));
