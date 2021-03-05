const { checkSchema, validationResult } = require("express-validator");
const { VisitorsCount } = require("../controller/museum");
const { getErrorMessage } = require("../helper/validator");
const { schema } = require("../helper/schema");

module.exports = (app) => {
  app.get("/api/visitors", [checkSchema(schema)], async (req, res) => {
    try {
      const err = validationResult(req);
      if (!err.isEmpty()) {
        const error = getErrorMessage(err);
        res.status(400).send(error);
      } else {
        const { result = {}, code } = await VisitorsCount(req.query);
        res.status(code).send({ result });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
