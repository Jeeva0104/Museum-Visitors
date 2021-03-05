const { fetchData } = require("../helper/server");
const {
  filter,
  convertMillisecond,
  responseFormatter,
} = require("../helper/utils");

/**
 *
 * @param {Object} params
 * @returns The visitors count
 * @description Returns the visitors count for the particular month
 */
const VisitorsCount = async (params) => {
  try {
    const { date = "", museum = "" } = params;
    const formatedDate = convertMillisecond(date);
    if (formatedDate === null) return responseFormatter(null);
    const visitors = await fetchData(formatedDate);
    if (visitors.length <= 0) return responseFormatter(null);
    const visitorsCount = filter(museum, visitors);
    if (visitorsCount === null) return responseFormatter(null);
    const { result, code } = responseFormatter(
      visitorsCount,
      museum,
      formatedDate
    );
    return { result, code };
  } catch (e) {
    throw e;
  }
};

module.exports = {
  VisitorsCount,
};
