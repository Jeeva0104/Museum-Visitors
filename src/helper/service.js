const axios = require("axios");
const { url } = require("../../config");
/**
 *
 * @param {Date} date
 * @description Makes API call to external Server
 * @returns Museum visitors in Array of objects
 */
const fetchClientData = async (date) => {
  try {
    var config = {
      method: "get",
      url: `${url}?month=${date}`,
    };
    const { data = [] } = await axios(config);
    return data;
  } catch (error) {
    if (error.response) {
      const errorObject = {
        statusCode: error.response.status,
        msg: error.response.data,
      };
      console.error(errorObject);
    } else {
      console.error(error.toString());
    }
    return [];
  }
};

module.exports = {
  fetchClientData,
};
