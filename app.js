const express = require("express");

//setting up express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listening for request
app.listen(3000);

//responding
app.get("/", (req, res) => {
  res.render('index')
});
app.get("/about", (req, res) => {
  res.render('about')
});
app.get("/blogs/create", (req, res) => {
  res.render('create')
});


//redirects
app.get('/about-us', (req, res) => {
  res.render('about')
});

//404 
app.use((rep, res) =>{
  res.status(404).render('404')
})
