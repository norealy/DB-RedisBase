const express = require('express');
// const axios = require('axios');
const redis = require('redis');

const app = express();

const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});
client.on("connection", function(error) {
  console.log("Redis connecttion .... OK !");
});

// add
client.set("key1", "value1", redis.print);
client.set("key2", "value2", redis.print);

client.hmset("secret", "name", "Nguyen van dat",redis.print)

// update
client.set("key1", "valueupdate", redis.print);

client.hmset("secret", "name", "Nguyen van datttt", redis.print)
client.hmset("secret", "age", "24", redis.print)

// delete
client.del("key", redis.print);
client.del("key1","key2", redis.print);

client.get("key1", redis.print);
client.get("key2", redis.print);
client.hmget("secret","name", redis.print);
client.hmget("secret","name","age", redis.print);
client.hgetall("secret", (err,res)=>{
  console.log(JSON.stringify(res))
});

app.listen(4000, () => {
  console.log('Server listening on port: ', 4000);
});