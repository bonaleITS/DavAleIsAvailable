var {
    Client
} = require('pg');

function getDbClient() {
    var client = new Client({
        user: 'drone',
        host: 'localhost',
        database: 'dbdrone',
        password: 'Blazi2017',
        port: 5432,
    });
    client.connect();
    return client;
}

async function GetAllDrones() {
    var client = getDbClient();
    var result = await client.query("SELECT * FROM dbdrone;");
    client.end();
    return result.rows;
}

async function GetDroneById(id) {
    var client = getDbClient();
    var result = await client.query("SELECT * FROM dbdrone WHERE id = $1;", [id]);
    client.end();
    return result.rows[0];
}

async function InsertValue(newValue) {
    var client = getDbClient();
    var insert = await client.query("INSERT INTO rilevazioni (id_drone, id_stato, valore, data_rilevazione) VALUES ($1, $2, $3, $4) RETURNING id;",
        [newValue.Id, newValue.Name, newValue.Value, newValue.Date]);
    // controllo se è avvenuto l'inserimento:
    var id = insert.rows[0].id;
    var last = await client.query("SELECT * FROM rilevazioni WHERE id = $1", [id]);
    client.end();
    return last.rows[0];
}

module.exports = {
    GetAllDrones,
    GetDroneById,
    InsertValue
};