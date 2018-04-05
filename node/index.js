var accountSid = 'ACd2703d2435e9f27be13461084469d84b';
var authToken = ''; //don't commit private key  

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+17402554915',  // Text this number
    from: '+12169105389' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
