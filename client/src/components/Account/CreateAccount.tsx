import React, { useState } from "react";
import axios from "axios";

import '../Join/Join.css';

const CreateAccount = () => {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birthdate, setBirthDate] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Checks bare-minimum empty values. If this passes, we allow access to chat room.
  const createAccount = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Create age validation
    console.log("Inside here");
  }

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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="joinInput mt-20"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="joinInput mt-20"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="joinInput mt-20"
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
            <div>
              <input
                type="text"
                placeholder="Password"
                className="joinInput mt-20"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBirthDate(event.target.value)}
              />
            </div>
            <button className="button mt-20 mb-3 cursor-pointer" onClick={createAccount} type="submit">
              Create An Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;