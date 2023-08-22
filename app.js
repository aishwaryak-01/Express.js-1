const express=require('express');

const app=express();

app.use( (request, response, next) => {
    console.log('First Middleware');
    next();
})

app.use( (request, response, next) => {
    console.log('Second Middleware');
    response.send('<h1>Hello from Express.js!</h1>');
})

app.listen(3000);