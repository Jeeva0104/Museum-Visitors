const NOT_FOUND_STATUS_CODE = 404;
const SUCCESS_STATUS_CODE = 200;
const SERVER_ERROR_CODE = 500;
const VALIDATION_CODE = 422;
const ERROR_MESSAGE = {
  empty_result: {
    code: NOT_FOUND_STATUS_CODE,
    msg: "Result Not Found",
  },
};

module.exports = {
  ERROR_MESSAGE,
  SUCCESS_STATUS_CODE,
  VALIDATION_CODE,
  SERVER_ERROR_CODE,
};
