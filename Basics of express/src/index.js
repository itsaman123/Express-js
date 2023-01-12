const path=require("path");

const express=require("express");
const app=express();

const staticPath=path.join(__dirname,"../public")
// console.log(path.join(__dirname,"../public"));
app.use(express.static(staticPath))
app.get('/',(req,res)=>{  
    res.send("<h1>hi, this is our first express project</h1>")
})
app.get('/about',(req,res)=>{  
    res.send("<h1>hi, this is about page</h1>")
})
app.listen(3000,()=>{
    console.log("listening the port at 8000")
})

// till #5