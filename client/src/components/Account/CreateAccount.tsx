import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '../Join/Join.css';

const CreateAccount = () => {
  const [firstname, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUserName] = useState<string>('');

  // Password Variables
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  /**
   * @desc - Checks bare-minimum empty values. If this passes, we allow access to chat room.
   * @param event 
   */
  const createAccount = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Create age validation
    console.log("Inside here");
  }

  return (
    <div className="d-flex text-center vh-100 align-items-center overflow-hidden login-background">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 align-items-center m-5 light-blue rounded-lg pt-5 pb-4 px-5 my-5">
          <div className="">
            <Link
              to="/login"
              className="text-decoration-none dark-blue-text d-flex justify-content-start"
            >
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span style={{fontSize: "19px"}}>&nbsp; Login </span>
            </Link>
            <h1 className="dark-blue-text pb-4">Log In</h1>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="mt-20 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="mt-20 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="mt-20 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-20 rounded-lg py-2 px-3 w-50"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
              />
            </div>

            <button className="blue-button text-uppercase w-25 p-2 rounded-lg text-white mt-20 cursor-pointer" onClick={createAccount} type="submit">
              Create An Account
            </button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default CreateAccount;