//Question1:How do you create a simple Express.js application?

const express = require('express');

//Question4:Implement CORS.
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/',(req,res) => {
    res.send("1.OUTPUT OF QUESTION1");
})

//Question2:Implementation of all type of exports in backend application.
//Default import
//const add = require('./Operation');

//Named import
const {add,sub,mul} = require('./Operation')
console.log(add(5,0));
console.log(sub(20,10));
console.log(mul(10,10));


//Question3:Create a middleware which will be applicable to all the routes.

const middleware1 = (req,res,next) => {
    console.log("My middleware1");
    next();
}

const middleware2 = (req,res,next) => {
    console.log("My middleware2");
    next();
}

app.use(middleware1)//middleware for all application

app.get('/about',(req,res) => {
    res.send("3.OUTPUT OF QUESTION3-Applied middleware1 and middleware2")
})

app.get('/contact',middleware2,(req,res) => {
    res.send("3.OUTPUT OF QUESTION3-Applied middleware2 only")
})


app.listen('7050',() => {
    console.log("Server is running on Port number 7050...");
})