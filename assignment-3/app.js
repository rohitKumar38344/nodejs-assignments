require("dotenv").config();
const express = require("express");
const connectTodDB = require("./config/db");

const app = express();

connectTodDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoutes.js");

app.use("/", userRoutes);

module.exports = app;
