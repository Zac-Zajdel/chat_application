import React, { useState } from "react";
import axios from "axios";

import Chat from "../Chat/Chat";

import './Join.css';

const Join = () => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [login, setLogin] = useState<boolean>(false);

  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Checks bare-minimum empty values. If this passes, we allow access to chat room.
  const accessChatRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!name || !room) {
      event.preventDefault();
      return;
    }
    setLogin(true);
  }

  // Checks bare-minimum empty values. If this passes, we allow access to chat room.
  const getUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if(username && password) {
      event.preventDefault();
      await axios.post('http://localhost:5000/login', {username, password}).then(result => {
        console.log(result);
      });
    } else {
      // TODO: Need to show them validation errors...
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
        <div className="row">
          <div className="col-md m-5 form-background">
            <div className="login">
              <h1 className="heading">Log In</h1>
              <div>
                <input
                  type="text"
                  placeholder="Username or Email"
                  className="joinInput"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="joinInput mt-20"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
              </div>
              <button className="button mt-20 mb-3 cursor-pointer" onClick={getUser} type="submit">
                Sign In
              </button>
              <span className="text-gray">
                Create An Account
              </span>
            </div>
          </div>

          {/* Quick Join Feature */}
          <div className="col-md m-5 form-background">
            <h1 className="heading">Quick Join Room</h1>
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
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;