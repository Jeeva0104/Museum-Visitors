const axios = require("axios");
const { url } = require("../../config");

const fetchData = async (date) => {
  try {
    var config = {
      method: "get",
      url: `${url}?month=${date}`,
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    if (error.response) {
      const errorObject = {
        statusCode: error.response.status,
        msg: error.response.data,
      };
      console.error(errorObject);
    } else {
      console.error(e.toString());
    }
    return [];
  }
};

module.exports = {
  fetchData,
};
