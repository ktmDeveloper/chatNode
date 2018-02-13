const WebSocket = require('uws');
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () =>{
    console.log('successful 2 connection');

    ws.send('hellow from client2');
})