var restify = require('restify');
db = require('../server/connection');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

function getPostId(req) {
    var id = parseInt(req.params.id, 10); // Verifica che l'id della richiesta sia effettivamente un numero
    return id;
}

server.get('/drones', function(req, res, next) {
    res.send('List of drones: [TODO]');
    return next();
});

server.get('/drones/:id', function(req, res, next) {
    res.send('Current values for drone ' + req.params['id'] + ': [TODO]');
    return next();
});

server.post('/drones/:id/status', function(req, res, next) {
    res.send('Data received from drone [TODO]');

    var Id = getPostId(req);
    value = JSON.parse(req.body);

    if (Array.isArray(value)) {
        value.forEach((v) => {
            var newValue = {
                Id,
                ...v
            }
            db.InsertValue(newValue);
        });
    } else {
        var newValue = {
            Id,
            ...value
        }
        db.InsertValue(newValue);
    }

    return next();
});

server.listen(8011, function() {
    console.log('%s listening at %s', server.name, server.url);
});