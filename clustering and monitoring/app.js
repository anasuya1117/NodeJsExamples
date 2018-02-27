const http = require('http');

console.log(`Worker ${process.pid} started...`);

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello World');

  process.exit(1);
}).listen(3000);