const express = require("express");

//setting up express app
const app = express();

//listening for request
app.listen(3000);

//responding
app.get("/", (req, res) => {
  res.sendFile("/view/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("/view/about.html", { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

//404 
app.use((rep, res) =>{
  res.status(404).sendFile('./view/404.html', { root: __dirname })
})
