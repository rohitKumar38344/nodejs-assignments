const express = require("express");

const app = express();
const port = 4005;
const hostname = "localhost";

let initValue = 0;

app.get("/", (req, res) => {
  res.type("json");
  res.send({ counter: initValue });
});
app.get("/increment", (req, res) => {
  res.type("json");
  res.send({ counter: initValue++ });
});
app.get("/decrement", (req, res) => {
  res.type("json");
  res.send({ counter: initValue-- });
});

app.listen(port, () => {
  console.log(`Server is running at ${hostname}:${port}`);
});
