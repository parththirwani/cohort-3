const express = require("express");
const jwt = require("jsonwebtoken")
const JWT_SECRET= "randomgibberish"
const app = express();

app.use(express.json());
const bodyParser = require ("body-parser");

const users = [];


function signupHandler(req, res) {
    const { username, password } = req.body;

    users.push({ username, password });

    res.json({
        message: "You are signed up"
    });

    // Log the users array to the console
    console.log("Updated users list:", users);
}

function signinHandler(req, res) {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username:username
        },JWT_SECRET)
        res.json({ token });
        console.log("User signed in:", user);
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        });
    }
}

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/frontend.html")
})
app.post("/signup", signupHandler);
app.post("/signin", signinHandler);

function auth(req, res, next) {
    const token = req.headers.token; 

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({
            message: "Unauthorized"
        });
    }
}

app.get("/me", auth, (req, res) => {
    const user = req.user;

    res.send({
        username: user.username  
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
