const TCPProxy = require('tcp-proxy.js');

//Blynk hardware port
const blynkHardware = new TCPProxy({ port: 5222 });
blynkHardware.createProxy({
  forwardPort: 8442,
  forwardHost: 'localhost',
});

//Blynk app port
const blynkApp = new TCPProxy({ port: 5228 });
blynkApp.createProxy({
  forwardPort: 9443,
  forwardHost: 'localhost',
});

//mqtt
// const mqtt = new TCPProxy({ port: 443 });
// mqtt.createProxy({
//   forwardPort: 1883,
//   forwardHost: 'localhost',
// });

//mqtt bridge
const mqtt = new TCPProxy({ port: 443 });
mqtt.createProxy({
  forwardPort: 1883,
  forwardHost: 'broker.shiftr.io',
});