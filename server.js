const io = require("socket.io")(3000);

// each time the user comes on to sever, this will run
io.on("connection", socket => {
  socket.emit("chat-message", "hello");
});
