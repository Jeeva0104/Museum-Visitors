const swaggerUi = require("swagger-ui-express");
const { swagger } = require("../swagger/index");
const museumRoutes = require("./museum");

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
  app.get("/api/health", (req, res) => res.send("ok"));
  museumRoutes(app);
};
