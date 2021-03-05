const { hostName, port } = require("../../config");
const { museum } = require("./definitions/museum");
const { museumPath } = require("./paths/museum");

const swagger = {
  swagger: "2.0",
  info: {
    description: "Museum API Documentation",
    version: "1.0.0",
    title: "Museum",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  host: `${hostName}:${port}`,
  basePath: "/api",
  tags: [
    {
      name: "museum",
      description: "Everything about your Museum",
    },
  ],
  schemes: ["http", "https"],
  paths: {
    ...museumPath,
  },
  definitions: {
    Museum: museum,
  },
};

module.exports = {
  swagger,
};
