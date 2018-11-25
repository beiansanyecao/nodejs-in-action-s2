// server.js

const http = require('http');
const port = 8080;

const server = http.createServer(function(req, res) {
    res.end('Hello, world');
})

server.listen(port, () => {
    console.log('Server is listening on: http://localhost: %s', port);
})