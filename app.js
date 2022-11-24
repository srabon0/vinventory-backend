const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});
const prodcutRouter =  require('./routes/product.route')
app.use("/api/v1/product",prodcutRouter)
module.exports = app;
