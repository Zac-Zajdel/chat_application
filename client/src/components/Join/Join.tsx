import React, { useState } from "react";

import Chat from "../Chat/Chat";

import './Join.css';

const Join = () => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [login, setLogin] = useState<boolean>(false);

  // Checks bare-minimum empty values. If this passes, we allow access to chat room.
  const accessChatRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!name || !room) {
      event.preventDefault();
      return;
    }
    setLogin(true);
  }

  // Conditionally Renders Chat Application or Login Form.
  if(login) {
    return (
      <Chat name={name} room={room} />
    );
  } else {
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="joinInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Room"
              className="joinInput mt-20"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRoom(event.target.value)}
            />
          </div>
          <button className="button mt-20 cursor-pointer" onClick={accessChatRoom} type="submit">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default Join;