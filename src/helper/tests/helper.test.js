const { convertMillisecond, filter, responseFormatter } = require("../utils");

describe("checking convertMillisecond", () => {
  it("should return null for empty string", () => {
    const result = convertMillisecond("");
    expect(result).toEqual(null);
  });

  it("should return null for invalid data", () => {
    const result = convertMillisecond("xxx");
    expect(result).toEqual(null);
  });

  it("should return null for empty string", () => {
    const result = convertMillisecond(" ");
    expect(result).toEqual(null);
  });

  it("should return in proper date format when input is number", () => {
    const result = convertMillisecond(1404198000000);
    expect(result).toEqual("2014-07-01");
  });

  it("should return in proper date format when input is string", () => {
    const result = convertMillisecond("1504198000000");
    expect(result).toEqual("2017-08-31");
  });
});

describe("checking Filter", () => {
  const sampleData = [
    {
      month: "2019-08-01T00:00:00.000",
      america_tropical_interpretive_center: "3410",
      avila_adobe: "20921",
      chinese_american_museum: "2017",
      gateway_to_nature_center: "977",
      firehouse_museum: "4460",
      iamla: "1258",
      pico_house: "120",
      museum_of_social_justice: "1701",
      biscailuz_gallery: "872",
    },
  ];
  it("should return null for empty string", () => {
    const result = filter("");
    expect(result).toEqual(null);
  });

  it("should return null for invalid data", () => {
    const result = filter("xxx", []);
    expect(result).toEqual(null);
  });

  it("should return null when empty params are passed", () => {
    const result = filter();
    expect(result).toEqual(null);
  });

  it("should return null for visitors data is empty", () => {
    const result = filter("avila_adobe", []);
    expect(result).toEqual(null);
  });

  it("should return visitors count", () => {
    const result = filter("avila_adobe", sampleData);
    expect(result).toEqual("20921");
  });
});

describe("checking responseFormatter", () => {
  it("should return error message when empty string is passed", () => {
    const result = responseFormatter("");
    expect(result).toEqual({
      result: {
        error_message: "Result Not Found",
      },
      code: 404,
    });
  });

  it("should return error message when null is passed", () => {
    const result = responseFormatter(null);
    expect(result).toEqual({
      result: {
        error_message: "Result Not Found",
      },
      code: 404,
    });
  });

  it("should return null when empty params are passed", () => {
    const value = responseFormatter(1234, "avila_adobe", "2014-07-01");
    expect(value).toEqual({
      result: {
        museum: "avila_adobe",
        visitors: 1234,
        year: "2014",
        month: "Jul",
      },
      code: 200,
    });
  });
});
