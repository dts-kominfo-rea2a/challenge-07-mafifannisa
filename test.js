const { promiseOutput } = require("./promise.js");

describe("promiseOutput test", () => {
  it("promiseOutput is a function", async () => {
    expect(promiseOutput).toBeInstanceOf(Function);
  });

  it("promiseOutput('tidak marah') should return 2", async () => {
    expect(await promiseOutput("tidak marah")).toBe(2);
  });

  it("promiseOutput('marah') should return 4", async () => {
    expect(await promiseOutput("marah")).toBe(4);
  });
});
