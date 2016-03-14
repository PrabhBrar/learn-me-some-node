var http = require('http');
var urls = []
for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}
var results = [];
function syncHTTPGet (urls) {
  var url = urls.pop();
  http.get(url,function(response){
      var str = '';
    response.on('data',function(data){
      str += data;
    });
    response.on('end',function(){
      results.push(str);
      if(urls.length){
        syncHTTPGet(urls);
      } else {
        console.log(results.reverse().join('\n'));
      }
    });
  });
}
syncHTTPGet(urls);