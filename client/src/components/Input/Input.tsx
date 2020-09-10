import React from 'react';

import './Input.css';

interface InputInterface {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input = (input: InputInterface) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={input.message}
        onChange={event => input.setMessage(event.target.value)}
      />

      <button className="sendButton" onClick={event => input.sendMessage(event)}>Send</button>
    </form>

  );
}

export default Input;
  