import { Response } from "express";

const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/short-urls")
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        done();
        // console.log(response.body);
      });
  });
});
