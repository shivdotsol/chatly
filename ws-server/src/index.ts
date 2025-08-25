import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 5000 });

wss.on("connection", (socket) => {
    socket.send("connected");
});
