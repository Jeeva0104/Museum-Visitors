const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.PORT);

const ENV = process.env;

module.exports = {
  port: parseInt(ENV.PORT || "8080", 10),
  hostName: ENV.HOSTNAME,
  url: ENV.URL,
};
