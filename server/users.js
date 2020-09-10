const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Search for existing user.
  const existingUser = users.find(user => user.room == room && user.name == name);
  if(existingUser) {
    return { error: 'Username is taken' };
  }

  // Apply user to users array and return.
  const user = { id, name, room }
  users.push(user);
  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getUser = (id) => users.find(user => user.id === id); 

const getUsersInRoom = (room) => users.filter(user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom }