const users = [];

/**
 * @desc - Obtains user input from frontend, validates, and creates user.
 * @param {number} id - Used as a unique identifier for the user.
 * @param {string} name - The username displayed on frontend
 * @param {string} room - The name of the room the user has joined. 
 */
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

/**
 * @desc - Used to remove a user for now..
 * @param {number} id - The socket.id 
 */
const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

/**
 * @desc - Used to fetch a unique user for now..
 * @param {number} id - The socket.id 
 */
const getUser = (id) => users.find(user => user.id === id); 

/**
 * @desc - Obtains All users inside a given room.
 * @param {string} room - The room x number of users are in. 
 */
const getUsersInRoom = (room) => users.filter(user => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom }