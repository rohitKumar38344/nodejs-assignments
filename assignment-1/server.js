const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Question-7
const server = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader("Content-Type", "text/plain");
  const msg = "I'm Happy To Learn Full Stack Web Development From PW Skills!";
  resp.end(msg);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
