const express = require("express");
const app = express();

app.use(logger)

app.get("/books",function (req,res){
    res.send({route:"/books"})
})

app.get("/libraries",checkPermission("librarian"),function (req,res){
    res.send({ route: "/libraries", permission: true})
})

app.get("/authors",checkPermission("author"),function (req,res){
    res.send({ route: "/authors", permission: true})
})

function logger(req,res,next){
    console.log("before route handler");
    next();
    console.log("after route handler")
}

function checkPermission(user){
    return function checking(req,res,next){
       console.log(req.path)
        return next()
    }
}

app.listen(2707,() =>{
console.log("listening on port 2707")
})