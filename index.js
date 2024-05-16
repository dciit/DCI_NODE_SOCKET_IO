const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});
io.on('disconnect', (socket) => {
    console.log('a user dis');
})

server.listen(9999, () => {
    console.log('listening on *:9999');
});