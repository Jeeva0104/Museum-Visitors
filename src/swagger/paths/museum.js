const museumPath = {
  "/visitors": {
    get: {
      tags: ["museum"],
      summary: "Returns visitors count",
      description: "Returns a visitors count with museum name and month",
      operationId: "getVisitorsCount",
      produces: ["application/json"],
      parameters: [
        {
          name: "museum",
          in: "query",
          description: "museum name",
          required: true,
          type: "string",
          default: "avila_adobe",
        },
        {
          name: "date",
          in: "query",
          description: "date in milliseconds",
          required: true,
          type: "number",
          default: 1404198000000,
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            $ref: "#/definitions/Museum",
          },
        },
        404: {
          description: "Result not Found",
        },
        500: {
          description: "Server Error",
        },
        422: {
          description: "Validation Error",
        },
      },
    },
  },
};

module.exports = { museumPath };
