const { checkSchema, validationResult } = require("express-validator");
const { VisitorsCount } = require("../controller/museum");
const { getErrorMessage } = require("../helper/validator");
const { schema } = require("../helper/schema");
const { SERVER_ERROR_CODE, VALIDATION_CODE } = require("../helper/constant");

module.exports = (app) => {
  app.get("/api/visitors", [checkSchema(schema)], async (req, res) => {
    try {
      const err = validationResult(req);
      if (!err.isEmpty()) {
        const error = getErrorMessage(err);
        res.status(VALIDATION_CODE).send(error);
      } else {
        const { result = {}, code } = await VisitorsCount(req.query);
        res.status(code).send({ result });
      }
    } catch (error) {
      console.error(error);
      res.status(SERVER_ERROR_CODE).send(error.toString());
    }
  });
};
