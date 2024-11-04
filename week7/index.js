require('dotenv').config();
const express = require ("express")
const { TodoModel, UserModel}= require("./db")
const JWT = require ("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const app = express();

const JWT_Secret = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

app.use(express.json())

app.post("/signup",async function(req,res){
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    await UserModel.create({
        email:email,
        password:password,
        name:name
    })

    res.json({
        message:"You are Logged in"
    })

}) 



app.post("/signin", async function(req,res){
    const email = req.body.email
    const password = req.body.password
    
    const user = await UserModel.findOne({
        email:email,
        password:password
    })
    console.log(user)
    if (user){
        const token = JWT.sign({
            id:user._id.toString()
        },JWT_Secret)
        res.json({
            token:token
        })
    }else{
        res.statusCode(403).json({
            message:"Incorrect credentials"
        })
    }
})

app.post("/todo",auth,async function(req,res){
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.body.userId

    await TodoModel.create({
        title:title,
        done:done,
        userId:userId

    })
    res.json({
        message:"Todo has been ingested"
    })
})

app.get("/todos",auth,async function(req,res){
    const userid = req.userId;
    const todos = await TodoModel.find({
        userId: userid
    })
    res.json({
        todos
    })    
})

function auth(req,res,next){
    const token = req.headers.token 
    const decodedData = JWT.verify(token,JWT_Secret);
    if (decodedData){
        req.userId= decodedData.id       
        next();
    }else{
        res,json({
            message: "Invalide credentials"
        })
    }
}
app.listen(3000)