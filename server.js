const io = require("socket.io")(3000);

const users = {};

// each time the user comes on to sever, this will run
io.on("connection", socket => {
  socket.on("new-user", name => {
    users[socket.id] = name;
  });
  socket.on("send-chat-message", message => {
    socket.broadcast.emit("chat-message", message);
  });
});
