const http = require("http");
//these is docker container
http.createServer((req, res) => {
  res.end("CI/CD is working!");
}).listen(3000);
