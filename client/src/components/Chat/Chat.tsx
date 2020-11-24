import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import './Chat.css';

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

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
   * @desc - Sets up socket and lets user join room.
   */
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name: chat.name, room: chat.room }, () => {
    });

    return () => {
      socket.emit('disconnect');
      socket.disconnect();
    }
  }, [chat.name, chat.room]);

  /**
   * @desc - Sends message to socket.
   * @param event - The event coming from the enter key.
   */
  const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      setMessages(msgs => [...msgs, message]);
    });
  }, []);

  // ! Testing Statement
  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={chat.room}/>

        <Messages messages={messages} name={chat.name} />

        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;