const express = require("express");
const jwt = require("jsonwebtoken")
const JWT_SECRET= "randomgibberish"
const app = express();
app.use(express.json());

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

app.post("/signup", signupHandler);
app.post("/signin", signinHandler);

app.get("/me",function(req,res){
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username
    let foundeUser = users.find(u => u.username == username);

    if (foundeUser){
        res.json({
            username: foundeUser.username,
            password: foundeUser.password
        })
    }else{
        res.json({
            message: "token invalid"
        })
    }

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
