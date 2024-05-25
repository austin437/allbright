const request = require("supertest");
const app = require("../../app");
import { ResponseBody } from "../../typings";

describe("/shorten", () => {
  test("will return a successful response", (done) => {
    request(app)
      .post("/shorten")
      .send({ url: "https://www.allbrightcollective.com/memberships" })
      .then((response: ResponseBody) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("will throw an error if the url is not valid", (done) => {
    const url: string = "a-badly-formed-url";
    request(app)
      .post("/shorten")
      .send({ url })
      .then((response: ResponseBody) => {
        expect(response.statusCode).toBe(400);
        expect(response.body).toStrictEqual({
          error: `${url} is not a valid URL`,
        });
        done();
      });
  });

  test("will throw an error if the url attribute is not present in the request", (done) => {
    request(app)
      .post("/shorten")
      .send()
      .then((response: ResponseBody) => {
        expect(response.statusCode).toBe(400);
        expect(response.body).toStrictEqual({
          error: `Please provide a url parameter in the request body`,
        });
        done();
      });
  });
});
