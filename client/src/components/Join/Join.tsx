import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Chat from "../Chat/Chat";

import './Join.css';

const Join = () => {
  // Quick Room Join Access
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  // Boolean values for conditional rendering of views
  const [isLoginValidated, setLogin] = useState<boolean>(false);
  const [isSignInView, setSignInView] = useState<boolean>(false);

  // User Credentials
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /**
   * @desc - Checks bare-minimum empty values. If this passes, we allow access to chat room.
   * @param event 
   */
  const accessChatRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!name || !room) {
      event.preventDefault();
      return;
    }
    setLogin(true);
  }

  /**
   * @desc - Checks bare-minimum empty values. If this passes, we allow access to chat room.
   * @param event 
   */
  const getUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if(username && password) {
      event.preventDefault();
      await axios.post('http://localhost:5000/login', {username, password}).then(result => {
        console.log(result);
      });
    } else {
      // TODO Need to show them validation errors...
    }
    setLogin(true);
  }

  // Conditionally Renders Chat Application or Login Form.
  if(isLoginValidated) {
    return (
      <Chat
        name={name}
        room={room}
      />
    );
  } else if(isSignInView) {
    return (
      <div className="d-flex text-center vh-100 align-items-center overflow-hidden login-background">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 align-items-center m-5 light-blue rounded-lg pt-5 pb-4 px-5 my-5">
            <span
              className="text-decoration-none dark-blue-text d-flex justify-content-start cursor-pointer"
              onClick={() => setSignInView(false)}
            >
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-left-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M10.828 10.828a.5.5 0 0 1-.707 0L6.025 6.732V9.5a.5.5 0 0 1-1 0V5.525a.5.5 0 0 1 .5-.5H9.5a.5.5 0 0 1 0 1H6.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                />
              </svg>
              <span className="pl-2 pt-1">JOIN A ROOM</span>
            </span>
            <h1 className="dark-blue-text pb-4">Log In</h1>
            <div>
              <input
                type="text"
                placeholder="Username or Email"
                className="mt-20 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="mt-20 rounded-lg py-2 px-3 w-50 mt-20"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="blue-button text-uppercase w-25 p-2 rounded-lg text-white mt-20 cursor-pointer"
              onClick={getUser}
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex text-center vh-100 align-items-center overflow-hidden login-background">
        <div className="row">

          {/* Quick Join Feature */}
          <div className="col-md-3"></div>
          <div className="col-md-6 align-items-center m-5 light-blue rounded-lg pt-5 pb-4 px-5 my-5">
            <span
              className="text-decoration-none dark-blue-text d-flex justify-content-end cursor-pointer"
              onClick={() => setSignInView(true)}
            >
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-right-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M5.172 10.828a.5.5 0 0 0 .707 0l4.096-4.096V9.5a.5.5 0 1 0 1 0V5.525a.5.5 0 0 0-.5-.5H6.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                />
              </svg>
              <span className="pl-2 pt-1">LOGIN</span>
            </span>
            <h1 className="dark-blue-text pb-4">Quick Join A Room</h1>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="mt-10 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Room"
                className="mt-20 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRoom(event.target.value)}
              />
            </div>
            <button
              className="blue-button text-uppercase w-25 p-2 mb-2 rounded-lg text-white mt-4 cursor-pointer"
              onClick={accessChatRoom}
              type="submit"
            >
              Start Chatting
            </button>

            <div className="mt-3">
              <Link
                to="/account/create"
                className="text-decoration-none dark-blue-text"
              >
                Create An Account &nbsp;
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Join;