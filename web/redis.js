const redis = require('redis');
const session = require('express-session');

const RedisStore = require('connect-redis')(session);
const client = redis.createClient();

const redisStore = new RedisStore({
    host: 'redis',
    port: '6379',
    client: '',
    ttl: 60*60*10
});

function getAllActiveConnections() {
    return new Promise((resolve, reject) => {
        redisStore.all(function(err,sessions) {
            if (err) reject(err);
            else resolve(sessions);
        });
    });
}

module.exports = {
    redisStore, getAllActiveConnections
};