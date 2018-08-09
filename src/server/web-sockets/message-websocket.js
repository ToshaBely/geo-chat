const WebSocket = require('ws');

const messageController = require('../controllers/message.controller');

module.exports = (server) => {
  const webSocketServer = new WebSocket.Server({server, path: '/message-socket'});

  webSocketServer.on('connection', (socket) => {
    console.log('[WS:OPEN]');
    wsSend(socket, {data: messageController.getAllMessages()});

    socket.on('message', (data) => {
      data = JSON.parse(data);

      console.log(`[WS:DATA]: ${typeof data} '${data}'`);
      const msg = messageController.addMessage(data);

      webSocketServer.clients
        .forEach(client => wsSend(client, { message: 'Broadcast', data: [msg] }));
    });

    socket.on('close', (code, reason) => {
      console.log('[WS:CLOSE]: ', code, reason);
    });
  });
};

function wsSend(webSocket, obj) {
  webSocket.send(JSON.stringify(obj));
}
