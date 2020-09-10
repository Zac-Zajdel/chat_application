import React from 'react';

interface messageInterface {
  message: string;
  name: string;
}

const Message = (singleMessage: messageInterface) => {
  return (
    <div>
      {/* <span>
        singleMessage.message
      </span>
      <span>
        { singleMessage.name }
      </span> */}
    </div>
  );
}

export default Message;