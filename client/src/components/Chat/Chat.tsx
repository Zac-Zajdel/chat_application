import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket: SocketIOClient.Socket;
const ENDPOINT: string = 'localhost:5000';

interface ChatInterface {
  name: string,
  room: string
}

const Chat = (chat: ChatInterface) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  /**
   * Sets up socket and lets user join room.
   */
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name: chat.name, room: chat.room }, () => {
    });

    return () => {
      socket.emit('disconnect');
      socket.off('test');
    }
  }, [chat.name, chat.room]);

  /**
   * @desc - Sends message to socket.
   * @param event - The event coming from the enter key.
   */
  const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  /**
   * @desc - Updates message list with new messages from socket.
   */
  useEffect(() => {
    socket.on('message', (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <input
          type="text"
          value={message}
          onChange={event => setMessage(event.target.value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
      </div>
    </div>
  );
}

export default Chat;