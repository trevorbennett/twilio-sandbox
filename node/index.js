var config = require('./config.json');

var twilio = require('twilio');
var client = new twilio(config.accountSid, config.authToken);

client.messages.create({
    body: 'Hello from Node: testing config setup',
    to: '+17402554915',  // Text this number
    from: '+12169105389' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
