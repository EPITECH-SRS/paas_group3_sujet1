const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'db-postgres',
    database: 'postgres_db',
    password: 'password',
    port: '5432'
});

client.connect();

module.exports = {
    client
}