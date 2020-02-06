var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hey bro!' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn anything you need to know about the upcoming Bro\'s United program. You can start by saying, Big bro tell me a fact.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye Little Bro');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye Little Bro');
     }
};

//  helper functions  ===================================================================


function getFact() {
    var myFacts = [
    '<audio src=\"https://cognitatio-polly-storage.s3.amazonaws.com/924851d8-a555-4b54-b61d-30308bd6dae2.mp3/>\'',
    '<audio src=\"https://cognitatio-polly-storage.s3.amazonaws.com/cbf31851-610f-4eb9-bb8b-489d01f2ce8c.mp3/>\'',
    '<audio src=\"Yhttps://cognitatio-polly-storage.s3.amazonaws.com/f7e5de2d-fb27-486f-ae01-537d9037163a.mp3" />\''
        ]

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}