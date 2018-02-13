const WebSocket = require('uws');
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () =>{
    console.log('successful 1 connection');

    ws.send('hellow from client');
})