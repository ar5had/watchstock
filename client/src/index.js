import {SocketProvider} from 'socket.io-react';
import io from 'socket.io-client';

import App from './components/app/App.js';
import React from 'react';
import ReactDOM from 'react-dom';

// connect to socket
const hn =`${window.location.hostname}`;
const url = `${hn}:${process.env.REACT_APP_SOCKET_PORT}`;
const socket = io.connect(url);
console.log(url);

ReactDOM.render(
  <SocketProvider socket={socket}>
    <App />
  </SocketProvider>,
  document.getElementById('root')
);
