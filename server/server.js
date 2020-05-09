
const server = require("http").createServer(),
  io = require("socket.io")(server),
  ip = process.env.ip || '127.0.0.1',
  port = process.env.port || 8080;

io.on('connection', (socket) => {

  socket.on("coup", (cellule,tour) => {
    console.log("coups " +tour);
    io.emit("coups",cellule,tour);
  });
  socket.on('restart',cellule => {
    console.log("restart")
    io.emit("restartGame",cellule);
  })
});

server.listen(port,ip,() =>
  {
    console.log(`serveur lancée sur le port ${port}`);
  });
