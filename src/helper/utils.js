const moment = require("moment");
const { ERROR_MESSAGE, SUCCESS_STATUS_CODE } = require("./constant");

/**
 *
 * @param {number} milliseconds
 * @description converts milliseconds to date
 * @returns {Date} The date in YYYY-MM-DD format
 */
const convertMillisecond = (milliseconds = "") => {
  try {
    const date = new Date(parseInt(milliseconds));
    if (moment(date).isValid()) return moment(date).format("YYYY-MM-DD");
    return null;
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param {string} museumName
 * @param {Object} visitorsData
 * @description  Fetchs the visitors count of museum
 * @returns The visitors count
 */
const filter = (museumName = "", visitorsData = []) => {
  const [data] = visitorsData;
  if (data && data[museumName]) return data[museumName];
  return null;
};

/**
 *
 * @param {number} visitors
 * @param {string} museum
 * @param {Date} formatedDate
 * @description Formats the response
 * @returns The response for both success and error status
 */
const responseFormatter = (visitors = "", museum = "", formatedDate = "") => {
  if (visitors === null || visitors.length <= 0) {
    const { msg, code } = ERROR_MESSAGE["empty_result"];
    return {
      result: {
        error_message: msg,
      },
      code,
    };
  }
  const year = moment(formatedDate).format("YYYY");
  const monthNum = moment(formatedDate).format("M");
  const month = moment.monthsShort(monthNum - 1);
  const resultObject = {
    museum,
    visitors,
    year,
    month,
  };
  return { result: resultObject, code: SUCCESS_STATUS_CODE };
};

module.exports = {
  convertMillisecond,
  filter,
  responseFormatter,
};
