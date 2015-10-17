
   Meteor.methods({
     sendMessage: function (comment, phonenumber)
     {
      // Twilio Credentials
      var ACCOUNT_SID = 'ACbab0bb99ae4e8fb08a97505d46ca70ce';
      var AUTH_TOKEN = 'ea2f0883736aa2a8338499fbc3b40406';

      twilio = Twilio(ACCOUNT_SID, AUTH_TOKEN);
        twilio.sendSms({
          to: " ' "+phonenumber+" ' ", // Any number Twilio can deliver to
          from: '+19145023953', // A number you bought from Twilio and can use for outbound communication
          body: comment  // body of the SMS message
        }, function(err, responseData) { //this function is executed when a response is received from Twilio
          if (!err) { // "err" is an error received during the request, if any
            // "responseData" is a JavaScript object containing data received from Twilio.
            // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
            // http://www.twilio.com/docs/api/rest/sending-sms#example-1
            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."
          }
      });
    }
  });
