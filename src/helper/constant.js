const MONTHS = {
  01: "Jan",
};
const NOT_FOUND_STATUS_CODE = 404;
const ERROR_MESSAGE = {
  empty_result: {
    code: NOT_FOUND_STATUS_CODE,
    msg: "Result Not Found",
  },
};
const SUCCESS_STATUS_CODE = 200;
const SERVER_ERROR_CODE = 500;
const VALIDATION_CODE = 422;

module.exports = {
  MONTHS,
  ERROR_MESSAGE,
  SUCCESS_STATUS_CODE,
  VALIDATION_CODE,
  SERVER_ERROR_CODE,
};
