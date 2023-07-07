const express = require("express");

const hostname = "127.0.0.1";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.type("json");
  res.send({ msg: "I am home page" });
});
app.get("/about", (req, res) => {
  res.type("json");
  res.send({ msg: "I am about page" });
});
app.get("/contact", (req, res) => {
  res.type("json");
  res.send({ email: "support@pwskills.com" });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
