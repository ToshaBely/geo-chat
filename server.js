const path = require('path');

const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const bodyParser = require('body-parser');

const config = require('./src/server/config');
const router = require('./src/server/routers');

const app = express();

const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({server, path: '/test'});

app.use(express.static(config.appDist));
app.use(bodyParser.json());

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.appDist, '/index.html'));
});

webSocketServer.on('connection', (ws) => {
  console.log('got connection');
  ws.on('message', (data) => {
    console.log('[WS:DATA]: ', data);
    ws.send(JSON.stringify({message: 'Got it!'}));
    webSocketServer.clients
      .forEach(client => client.send(JSON.stringify({message: 'Broadcast with', messageText: data})));
  });

  ws.send(JSON.stringify({message: 'Hi there!'}));
});

server.listen(3000, function() {
    console.log('App starts on port 3000');
});
