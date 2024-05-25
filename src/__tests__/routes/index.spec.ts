const request = require("supertest");
const app = require("../../app");
import { ResponseBody } from "../../typings";

describe("/:shortenUrl", () => {
  describe("Full request flow", () => {
    test("It should response the GET method", async () => {
      const longUrl: string = "https://www.allbrightcollective.com/memberships";
      let shortUrl: Object | string = "";

      await request(app)
        .post("/shorten")
        .send({ url: longUrl })
        .then((response: ResponseBody) => {
          expect(response.statusCode).toBe(200);
          shortUrl = response.body.data;
        });

      await request(app)
        .get(`/?shortUrl=${shortUrl}`)
        .then((response: ResponseBody) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.data).toBe(longUrl);
        });
    });
  });

  describe("handles error:", () => {
    test("url cannot be found", async () => {
      const shortUrl: string = "a-url-that-does-not-exist";
      await request(app)
        .get(`/?shortUrl=${shortUrl}`)
        .then((response: ResponseBody) => {
          expect(response.statusCode).toBe(422);
          expect(response.body).toStrictEqual({
            error: `Unable to locate ${shortUrl}`,
          });
        });
    });
  });
});
