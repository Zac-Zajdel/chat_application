import React from 'react';

// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

import Message from './Message/Message';

interface messagesInterface {
  messages: string[];
  name: string;
}

const Messages = (channelMessages: messagesInterface) => {
  return (
    <ScrollToBottom className="messages">
      { 
        channelMessages.messages.map((message, index) => 
          <div key={index}>
            <Message message={message} name={channelMessages.name} />
          </div>
        )
      }
    </ScrollToBottom>
  );
}

export default Messages;