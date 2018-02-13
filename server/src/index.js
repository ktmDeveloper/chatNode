import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import webSocketServer from 'uws';

const PORT = 3000;
const app = express();
app.server = http.createServer(app);


app.use(morgan('dev'));


app.use(cors({
    exposedHeaders: "*"
}));

app.use(bodyParser.json({
    limit: '50mb'
}));
app.set('root', __dirname);

app.server.listen(process.env.PORT || PORT, () => {
        console.log(`App is running on port ${app.server.address().port}`);
});

app.wss = new webSocketServer.Server({
    server: app.server
});

app.wss.on('connection', (connection) => {
    console.log("new client");

    connection.on('message', (message) => {
        console.log("message from: ", message)
    })

})

app.get('/',(req, res) => {
    res.send('hello')
})

export default app;
