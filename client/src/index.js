import {SocketProvider} from 'socket.io-react';
import io from 'socket.io-client';

import App from './components/app/App.js';
import React from 'react';
import ReactDOM from 'react-dom';

// connect to socket
const socket = io.connect('http://localhost:3002');

ReactDOM.render(
  <SocketProvider socket={socket}>
    <App />
  </SocketProvider>,
  document.getElementById('root')
);
