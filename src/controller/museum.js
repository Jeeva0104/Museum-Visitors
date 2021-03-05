const { fetchData } = require("../helper/server");
const {
  filter,
  converMillisecond,
  responseFormatter,
} = require("../helper/helper");

const VisitorsCount = async (params) => {
  try {
    const { date = "", museum = "" } = params;
    const formatedDate = converMillisecond(date);
    const visitors = await fetchData(formatedDate);
    if (visitors.length <= 0) return responseFormatter(null);
    const visitorsCount = filter(museum, visitors);
    if (visitorsCount === null) return responseFormatter(null);
    const { result } = responseFormatter(visitorsCount, museum, formatedDate);
    return { result };
  } catch (e) {
    return e;
  }
};

module.exports = {
  VisitorsCount,
};
