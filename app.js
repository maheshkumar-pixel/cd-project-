const http = require("http");

http.createServer((req, res) => {
  res.end("CI/CD is working!");
}).listen(3000);
