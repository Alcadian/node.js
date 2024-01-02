const express = require("express");

//setting up express app
const app = express();

//listening for request 
app.listen(3000);

//responding
app.get("/", (req, res) => {
  res.send("<h1> hello world oooooo </h1>");
});
