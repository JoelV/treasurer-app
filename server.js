var st = require('st');
var http = require('http');

var mount = st({ 
  path: __dirname + '/public', 
  url: '/' ,
  index: 'index.html',
  cache: false 
});
http.createServer(function(req, res) {
  if(mount(req, res)) { return ; }
  res.end('Something is wrong');
}).listen(1338);

console.log('Listening on port 1338');