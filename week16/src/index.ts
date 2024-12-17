import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0

// Event handler for when a user connects
wss.on("connection", (socket)=> {
    userCount= userCount + 1 
    console.log("User connected #" + userCount);

    socket.on("message", (message)=> {
        console.log("message recieved " +message.toLocaleString())
        socket.send(message.toString()+": sent from the server")
    })
})