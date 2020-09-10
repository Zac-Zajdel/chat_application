const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {

  /**
   * @desc - Allows user to join a room.
   */
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) {
      return callback(error);
    } 

    // Welcomes user to the chat.
    socket.emit('message', { user: 'admin', text: `${user.name} welcome to the room ${user.room}!` });

    // Broadcasts to the channel but not the user that the user has joined the room.
    socket.broadcast.to(user.room).emit('message', { user: 'admin', payload: `${user.name} has joined.` });

    // User joins room.
    socket.join(user.room);
    console.log("User Connected");

    callback();
  });

  /**
   * @desc - Listens for a user sending message and obtains the users room and emits message to everyone else.
   */
  socket.on('sendMessage', (message, callback) => {
    // Obtains user who sent message.
    const user = getUser(socket.id);

    // Send users messsage into the room.
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.broadcast.emit("hello World");

  /**
   * @desc - Allows user to disconnect from the socket.
   */
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));