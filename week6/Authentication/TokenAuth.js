const express = require("express");

const app = express();
app.use(express.json());

const users = [];

// Should return a long random string
function generateToken() {
    const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token = generateToken();
        user.token = token;
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
    let foundeUser = users.find(u => u.token == token);

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
