const express = require("express");
const path = require("path");
const app = express();
const port = 80;
 
 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
 
app.get("/", (req,res)=>{
    res.send("this is homepage")
})
 
app.get("/demo", (req,res)=>{
    res.status(200).render('index.pug', {title: "Hey Nirvrithi", message: "Hello!!", message2: "This works amazingly fine"})
})
 
app.listen(port, ()=>{
    console.log("The application started at port 80");
})