const express = require("express");

const app = express();

function Middleware(req,res, next){
    console.log("Method is "+ req.method)
    console.log("Request URL is "+ req.originalUrl)
    console.log(new Date())
    next();
}

app.use(Middleware);

app.get("/sum",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans: a+b
    })
})

app.get("/sub",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans: a-b
    })
})

app.get("/multiply",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans: a*b
    })
})

app.get("/divide",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans: a/b
    })
})

app.listen(3000);