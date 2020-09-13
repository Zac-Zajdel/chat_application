import React from 'react';

import './Message.css';

interface messageInterface {
  message: any;
  name: string;
}

const Message = (singleMessage: messageInterface) => {
  let isSentByCurrentUser = false;

  const trimmedName = singleMessage.name.trim().toLowerCase();
  if(singleMessage.message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser 
    ? (
      <div className="messageContainer justify-end">
        <p className="sentText pr-10">{ trimmedName }</p>
        <div className="messageBox background-blue">
          <p className="messageText color-white">{ singleMessage.message.text }</p>
        </div>
      </div>
    ) : (
      <div className="messageContainer justify-start">
        <div className="messageBox background-light">
          <p className="messageText color-dark">{ singleMessage.message.text }</p>
        </div>
        <p className="sentText pl-10">{ singleMessage.message.user }</p>
      </div>
    )

  );
}

export default Message;