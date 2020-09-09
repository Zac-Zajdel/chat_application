import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket: SocketIOClient.Socket;

interface ChatInterface {
  name: string,
  room: string
}

const Chat = (chat: ChatInterface) => {
  const ENDPOINT: string = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);
    console.log(socket);

    socket.emit('join', { name: chat.name, room: chat.room }, ({ error }: any) => {
      console.log(error);
    });

  }, [chat.name, chat.room]);

  return (
    <h1>Hello {chat.name}! Welcome to { chat.room }</h1>
  );
}

export default Chat;