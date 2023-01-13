const express = require('express')
const path=require("path")
const app = express()
const port = 3000

// builtin middlewares

const staticPath=path.join(__dirname,"../public");
// Customizing the Views Directory
const templatePath=path.join(__dirname,"../templates")

// to set the view engin 
app.set("view engine","hbs");
app.set('views',templatePath)
// app.use(express.static(staticPath));

app.get('', (req, res) => {
  res.render('index',{
    channelName:"Address"
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about!')
})
app.get('/contact', (req, res) => {
  res.send('contact!')
})
app.get('*', (req, res) => {
  res.send('<h1>error 404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});