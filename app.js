const express = require("express");
const morgan = require('morgan')

//setting up express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listening for request
app.listen(3000);
app.use(morgan('dev'))



app.use((req, res, next)=>{
  console.log('new request made');
  console.log('host: ', req.hostname);
  console.log('path ', req.path);
  console.log('mathod ', req.method);
  next()
})

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
