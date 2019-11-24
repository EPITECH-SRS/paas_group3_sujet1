const redis = require('redis');
const client = redis.createClient(process.env.REDIS_PORT,process.env.REDIS_HOST);

client.on('connect', function() {
	console.log('Redis client connected');
});

client.on('error', function(err) {
	console.log('Error on redis : ' + err);
});

const connectREDIS = async (req,res) => {
	var redisStatus = dbName = "";
	client.ping(function(err,reply) {
		if (err) { console.log(err); }
		console.log(reply);
		if (reply == "PONG") { redisStatus="OK"; }
		else { redisStatus = "KO"; }
	});
	client.set("dbName", "redisDB", function(err,reply) {
	if (err) { console.log(err); }
	console.log(reply);
	});
	client.get("dbName", function(err,reply) {
	if (err) { console.log(err); }
	console.log(reply);
	redisDBname = reply;
	});
	client.info("clients", function(err, reply) {
	  if (err) { console.log('Error on redis : ' + err); }
      console.log(reply);
	  console.log(typeof(reply));
	  const search = "connected_clients:";
	  const index = reply.indexOf(search);
	  const nbClients = reply.charAt(search.length + index);
	  res.json({
        "status": redisStatus,
		"dbName": redisDBname,
		"redisConnectedClients": nbClients
    	});
	});
};

module.exports = {
    connectREDIS
}
