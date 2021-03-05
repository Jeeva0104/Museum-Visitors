const schema = {
  museum: {
    in: "query",
    optional: false,
    custom: {
      options: (value, { req }) => {
        if (req.query && req.query.museum) {
          if (req.query.museum.length <= 0) return req.query.museum;
          return true;
        }
      },
      errorMessage: "Please provide museum name",
    },
  },
  date: {
    in: "query",
    optional: false,
    isInt: true,
    errorMessage: "Please provide proper date",
  },
};

module.exports = {
  schema,
};
