const moment = require("moment");
const { ERROR_MESSAGE, SUCCESS_STATUS_CODE } = require("../helper/constant");

const converMillisecond = (milliseconds) => {
  try {
    const date = new Date(parseInt(milliseconds));
    if (moment(date).isValid()) return moment(date).format("YYYY-MM-DD");
    return null;
  } catch (e) {
    throw e;
  }
};

const filter = (museumName, visitorsData) => {
  const [data] = visitorsData;
  if (data && data[museumName]) return data[museumName];
  return null;
};

const responseFormatter = (visitors, museum, formatedDate) => {
  if (visitors === null) {
    const { msg, code } = ERROR_MESSAGE["empty_result"];
    return { result: msg, code };
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
  converMillisecond,
  filter,
  responseFormatter,
};
