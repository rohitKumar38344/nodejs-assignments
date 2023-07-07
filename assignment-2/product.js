const express = require("express");

const app = express();

const hostname = "localhost";
const port = 3000;

let womensData;
let mensData;
async function fetchData() {
  womensData = await fetch("https://fakestoreapi.com/products?limit=10").then(
    (res) => res.json()
  );
  mensData = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
}

app.get("/", (req, res) => {
  res.send("Welcome to Men and Women Dummy Data");
});
app.get("/men", (req, res) => {
  res.type("json");
  res.send(mensData);
});
app.get("/women", (req, res) => {
  res.type("json");
  res.send(womensData);
});
app.get("/other", (req, res) => {
  res.send("Page not found!");
});

app.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`);
});

fetchData();
