var restify = require('restify');
var pgRestify = require('pg-restify');

// create a simple restify server
var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/drones', function(req, res, next) {
    res.send('List of drones: [TODO]');
    return next();
});

server.get('/drones/:id', function(req, res, next) {
    res.send('Current values for drone ' + req.params['id'] + ': [TODO]');
    return next();
});

server.post('/drones/:id', function(req, res, next) {
    res.send('Data received from drone [TODO]');

    console.log(req.body);

    return next();
});

// server.listen(8011, function() {
//     console.log('%s listening at %s', server.name, server.url);
// });

//Connessione al DB locale

// var restify = require('pg');

// var {
//     Client
// } = require('pg');

// const client = new Client({
//     user: 'davide',
//     host: 'localhost',
//     database: 'drone_db',
//     //password: '1234abcd',
//     port: 5432,
// });

// client.connect();

// // Run the server!
// async function Run() {
//     try {
//         var port = 8011; //Porta a scelta
//         await restify.listen(port);
//         console.log(`Server listen on port ${port}`);
//     } catch (error) {
//         console.log(`error`, error);
//     }
// }
// Run();

// add the pgRestify functionality
// by providing the restify instance
// and a server connection string

pgRestify.initialize({
    server: server,
    pgConfig: 'pg://localhost/pg_restify'
}, function(pgRestifyInstance) {
    // now that the query to get table metadata is done,
    // start the server
    server.listen(8011, function() {
        console.log('%s listening at %s', server.name, server.url);
    });
});