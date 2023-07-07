const express = require("express");

const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.get("/random", (req, res) => {
  const randomNo = Math.floor(Math.random() * 10);
  res.type("json");
  res.send({ random: randomNo });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
