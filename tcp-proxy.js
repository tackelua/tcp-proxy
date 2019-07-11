const TCPProxy = require('tcp-proxy.js');

//Blynk hardware port
const blynkHardware = new TCPProxy({ port: 5222 });
blynkHardware.createProxy({
  forwardPort: 8442,
  forwardHost: 'localhost',
});
console.log('Forward 8442 to 5222');

//Blynk app port
const blynkApp = new TCPProxy({ port: 5228 });
blynkApp.createProxy({
  forwardPort: 9443,
  forwardHost: 'localhost',
});
console.log('Forward 9443 to 5228');

//Paypal
const paypalApp = new TCPProxy({ port: 443});
paypalApp.createProxy({
  forwardPort: 4040,
  forwardHost: 'localhost',
});
console.log('Forward 4040 to 443');

//mqtt
// const mqtt = new TCPProxy({ port: 443 });
// mqtt.createProxy({
//   forwardPort: 1883,
//   forwardHost: 'localhost',
// });
