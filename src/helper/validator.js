const getErrorMessage = (err = null) => {
  if (err && err.array().length)
    return {
      error: err.array(),
    };
  return err;
};
module.exports = {
  getErrorMessage,
};
