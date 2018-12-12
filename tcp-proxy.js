const TCPProxy = require('tcp-proxy.js');
const proxy = new TCPProxy({ port: 5222 });
proxy.createProxy({
  forwardPort: 8442,
  forwardHost: 'localhost',
});
const proxy2 = new TCPProxy({ port: 5228 });
proxy2.createProxy({
  forwardPort: 9443,
  forwardHost: 'localhost',
});