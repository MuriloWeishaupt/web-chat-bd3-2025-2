const express = require('express');

const ejs = require('ejs');

const http = require('http');

const path = require('path');

const socket = require('socket.io')

const app = express();

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'public'));

app.engine('html', ejs.renderFile);

app.use('/', (req, res ) => {
    res.render('index.html')
});

server.listen(3000, () => {
    console.log("E num é que ta rodando kk. http://localhost:3000")
})
