const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config");
const port = config.port || 8080;
const hostName = config.hostName || "0.0.0.0";

async function main() {
  app.use(cors());
  require("./src/routes/index")(app);
  console.log(`App listening on port http://${hostName}:${port}/api`);
}
app.listen(port, app.get("host"));
main().catch((err) => {
  console.error(err);
  return new Error(err);
});
