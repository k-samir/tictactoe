
const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"]
});

io.on('connection', (socket) => {
  
  socket.on("coup", cellule => {
    console.log("coups");
    io.emit("test",cellule);
  });
  
});

server.listen(3000,'127.0.0.1',() =>
  {
    console.log("serveur ouvert sur le port 3000");
  });
