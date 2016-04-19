// This uses redis instead og mongodb.
// Start the redis server before running this node script:
// ./start-redis

var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

client.set("framework", "Angularjs", redis.print);

// Arvon luku'
    client.get('framework', function(err, object) {
    console.log('Ohjelmointikehys: ', object);
   });

client.hmset('ohjelmakalut',
 'javascript', 'AngularJS',
 'css', 'Bootstrap',
 'node', 'Express');

client.hgetall('ohjelmakalut', function(err, object) {
    console.log('Käyttö ja työkalu:', object);
});

// Tallenna lista
client.rpush(['viikko', 'maanantai',
 'tiistai',
 'keskiviikko',
 'torstai',
 'perjantai',
 'lauantai',
 'sunnuntai'],
 function(err, reply) {
    console.log(reply); //prints 7
});

// tarkistetaan, onko avain olemassa
client.exists('viikko', function(err, reply) {
    if (reply === 1) {
        console.log('viikko annettu');
    } else {
        console.log('viikko tuntematon');
    }
});

// Lue ja tulosta edellinen lista
    client.lrange('viikko', 0, -1, function(err, reply) {
        console.log(reply); // tulostaa viikonpäivät
    });

    client.lrange('viikko', 0, 0, function(err, reply) {
        console.log(reply, " = viikon eka päivä");
    });

    client.lrange('viikko', -1, -1, function(err, reply) {
        console.log(reply, " = viikon viimeinen päivä");
    });
// nollaa avain viikko
client.del('viikko', function(err, reply) {
    console.log('Nollaus', reply);
});
