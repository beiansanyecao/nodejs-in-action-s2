// error_emit.js

const events = require('events');

const myEmitter = new events.EventEmitter();
myEmitter.on('error', err => {
 console.log(`ERROR: ${err.message}`);
});
myEmitter.emit('error', new Error('Something is wrong.')); 