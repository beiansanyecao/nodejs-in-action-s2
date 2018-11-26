// event.js

const EventEmitter = require('events').EventEmitter;
const net = require('net');
const channel = new EventEmitter();

channel.clients = {};
channel.subscriptions = {};

channel.on('join', (id, client) => {
    console.log(this);
    console.log(channel);

    this.clients[id] = client;

    this.subscriptions[id] = (senderId, message) => {
        if (id != senderId) {
            // this.clients[id].write(message);
        }
    }

    this.on('broadcast', this.subscriptions[id]);

})

const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;

    console.log(channel);

    channel.emit('join', id, client);

    client.on('data', data => {
        data = data.toString();
        channel.emit('broadcast', id, data);
    })
})

server.listen(8888);